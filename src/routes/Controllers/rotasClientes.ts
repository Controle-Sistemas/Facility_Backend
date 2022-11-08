import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import conn from '../../db';
import ClientesModel from '../../db/Models/systemloginrequest';
import UserTableCustomModel from '../../db/Models/sysUserTableCustom';
import sendEmailService from '../../services/sendEmailService';
const routes = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '../../config/auth';

routes.get('/admin', (req: Request, res: Response) => {
	ClientesModel.getClients(res);
});

routes.get('/campos', (req: Request, res: Response) => {
	ClientesModel.getFields(res);
});

routes.get('/usuario/:cnpj', (req: Request, res: Response) => {
	const cnpj = Number(req.params.cnpj);
	ClientesModel.getClientByCNPJ(cnpj, res);
});

routes.get('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	ClientesModel.getClientById(id, res);
});

//Rota para cadastrar um novo usuário
routes.post(
	'/',
	// Algumas verificações de validação
	body('EMAIL').isEmail().normalizeEmail(),
	body('CNPJ').not().isEmpty().trim().escape(),
	body('NOME').not().isEmpty().trim().escape(),
	body('NOMEESTABELECIMENTO').not().isEmpty().trim().escape(),
	(req: Request, res: Response) => {
		const errors = validationResult(req); //Pega todos os erros de validação
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() }); //Retorna os erros de validação
		}

		const client = req.body; //Pega os dados do usuário
		const cnpj = client.CNPJ.replace('&#x2F;', '/').replace(/\D/g, '');
		client.CNPJ = cnpj;
		conn.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ =${cnpj}`, async (err: any, results: any) => {
			//Verifica se existe algum usuário com o mesmo cnpj
			try {
				if (err) {
					console.log(err);
				} else {
					if (results.length > 0) {
						//Se existir, retorna um erro
						res.status(400).json({
							message: `Ja existe um pedido de conta com esse CNPJ pendente. \n Caso não tenha solicitado ou esteja demorando, entre em contato com nosso suporte`
						});
					} else {
						let password = Math.random().toString(36).substring(2, 8); //Gera uma senha aleatória
						const passwordEncrypted = bcrypt.hash(password, 5); //Criptografa a senha
						await passwordEncrypted
							.then((result) => {
								client.PASSWORD = result; //Adiciona a senha criptografada ao usuário
							})
							.catch((err) => {
								console.log(err);
							});
						let HASHTOKEN = bcrypt.hash((client.CNPJ+client.IDCLOUD), 8); //Gera um hash para o token
						await HASHTOKEN
							.then((result) => {
								client.HASHTOKEN = result; //Adiciona o hash ao usuário
							})
							.catch((err) => {
								console.log(err);
							})
							
						if (res.statusCode !== 200) {
							res.status(400).json({ message: `Erro ao criar o cliente` });
						} else {
							try {
								ClientesModel.createClient(client, res); //Cria o usuário
								const SendEmailService = new sendEmailService(1,client)
								SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
								conn.query(
									`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ =${cnpj}`,
									async (err: any, results: any) => {
										//Verifica se existe algum usuário com o mesmo cnpj
										try {
											if (err) {
												console.log(err);
											} else {
												if (results.length > 0) {
													const tableData = {
														idTable: [ 1, 2 ],
														idUser: results[0].ID
													};
													const fieldNamesTable2 = `IDCLOUD,ID,IDCIDADE,IDREPRESENTANTE,NOMEFANTASIA,NOMECONTATO,RAZAOSOCIAL,CNPJ,CNAE,INSCRICAOESTADUAL,EMAIL,RAMOATIVIDADE,REPRESENTANTE,NOVO,STATUS,ATIVO,CEP,BAIRRO,CIDADE,COMPLEMENTO,NUMERO,ENDERECO,UF,DATAVIGENCIA,CADASTRADAPOR,OBSERVACOES,FONECOBRANCA,FONEADICIONAL,DATAINICIO,DIASLICENCAPROVISORIA,VALORMENSALIDADE,VALORIMPLANTACAO,AÇÕES`.split(
														','
													);
													const fieldNamesTable1 = `ID,NOME,NOMEESTABELECIMENTO,EMAIL,CNPJ,IDCLOUD,RAMODEATIVIDADE,STATUS,ADMIN,AÇÕES`.split(
														','
													);

													for (let i = 0; i < tableData.idTable.length; i++) {
														if (tableData.idTable[i] == 1) {
															fieldNamesTable1.forEach((field) => {
																let newData = {
																	idUser: tableData.idUser,
																	idTable: tableData.idTable[i],
																	fieldName: field,
																	fieldCaption: field,
																	visible:1
																};
																UserTableCustomModel.createTable(newData, res); //Cria a tabela na base de dados
															});
														} else if (tableData.idTable[i] == 2) {
															fieldNamesTable2.forEach((field) => {
																let newData = {
																	idUser: tableData.idUser,
																	idTable: tableData.idTable[i],
																	fieldName: field,
																	fieldCaption: field,
																	visible: field === 'AÇÕES' || "IDCLOUD" || "RAZAOSOCIAL" || "NOMEFANTASIA" || "CNPJ" || "NOMECONTATO" || "CEP" ? 1 : 0
																};

																UserTableCustomModel.createTable(newData, res); //Cria a tabela na base de dados
															});
														}
													}
												}
											}
										} catch (err) {
											console.log(err);
										}
									}
								);

								res.status(200).json({ message: `Cliente criado com sucesso` });
							} catch (err) {
								console.log(err);
								res.status(400).json({ message: `Erro ao criar o cliente` });
							}
						}
					}
				}
			} catch (error) {
				console.error(error);
			}
		});
	}
);

//Rota para Login de um usuário
routes.post('/login', (req: Request, res: Response) => {
	const { CNPJ, PASSWORD } = req.body; //Pega os dados do usuário
	conn.query('SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ' + parseInt(CNPJ), async (err: any, results: any) => {
		//Verifica se existe algum usuário com o mesmo cnpj
		try {
			if (err) {
				console.log(err);
			} else {
				if (results.length > 0) {
					//Se existir, verifica a senha
					const passwordEncrypted = results[0].PASSWORD;
					await bcrypt.compare(PASSWORD, passwordEncrypted).then((result) => {
						//Compara a senha criptografada com a senha digitada
						if (result) {
								let token = jwt.sign(
									{
										//Cria o token
										id: results[0].id,
										cnpj: results[0].cnpj,
									},
									auth.secret,
									{
										expiresIn: auth.expireIn
									}
								);

							/*
								Status
								0 - Aguardando aprovação
								1 - Aprovado
								2 - Reprovado
								
								isAdmin
								0 - Não é admin
								1 - É admin
							*/

							if (result && results[0].STATUS === 1 && results[0].ADMIN === 0) {
								res.status(200).json({ message: `Cliente logado com sucesso`, token, isAdmin: false}); //Retorna o token e se o usuário é admin
							} else if (result && results[0].STATUS === 1 && results[0].ADMIN === 1) {
								res.status(200).json({
									message: `Cliente logado com sucesso`,
									token,
									isAdmin: true,
									id: results[0].ID
								}); //Retorna o token e se o usuário é admin
							} else if (result && results[0].STATUS === 0) {
								res.status(400).json({
									message: `Sua conta está sendo analisada, para mais informações contate o nosso suporte (45) 99934-3293`
								}); //Retorna uma menagem de erro
							}
						} else {
							res.status(400).json({ message: `Senha incorreta` }); //Retorna uma mensagem de erro
						}
					});
				} else {
					res.status(400).json({ message: `CNPJ não cadastrado` });
				}
			}
		} catch (error) {
			console.error(error);
		}
	});
});

//Rota para atualizar um usuário
routes.patch('/logout', (req: Request, res: Response) => {
	return { token: null }; //Retorna um token nulo
});

routes.patch('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const client = req.body;

	ClientesModel.updateClient(id, client, res);
});

routes.patch('/change-password/:cnpj', (req: Request, res: Response) => { //Rota para alterar a senha de um usuário
	const CNPJ = req.params.cnpj; //Pega o cnpj do usuário
	const oldPassword = req.body.oldPassword;  //Pega a senha antiga
	const newPassword = req.body.newPassword; //Pega a nova senha

	conn.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ${CNPJ}`, async (err: any, results: any) => { 
		try {
			if (err) {
				console.log(err);
			} else {
				if (results.length > 0) { //Verifica se existe algum usuário com o mesmo cnpj
					const oldPasswordEncrypted = results[0].PASSWORD; //Pega a senha criptografada
					await bcrypt.compare(oldPassword, oldPasswordEncrypted).then((result) => { //Compara a senha antiga com a senha criptografada
						if (result) { //Se for igual, criptografa a nova senha e atualiza o usuário
							const passwordEncrypted = bcrypt.hash(newPassword, 5); 
							passwordEncrypted
								.then((result) => {
									if (result) {
										const data = {
											PASSWORD: result
										};
										conn.query(
											`UPDATE SYSLOGINREQUEST SET ? WHERE CNPJ = ${CNPJ}`,
											[ data ],
											(err: any, results: any) => {
												if (err) {
													console.log(err);
												} else {
													res.status(200).json({ message: `Senha atualizada com sucesso` });
												}
											}
										);
									} else {
										res.status(400).json({ message: `Erro ao atualizar a senha` });
									}
								})
								.catch((err) => {
									console.log(err);
								});
						} else {
							console.log(result);

							res.status(400).json({ message: `Senha atual incorreta` });
						}
					});
				} else {
					res.status(400).json({ message: `Usuário não encontrado` });
				}
			}
		} catch (error) {
			console.error(error);
		}
	});
});

routes.patch('/forgot-password/:cnpj', (req: Request, res: Response) => {  //Rota para recuperar a senha de um usuário
	const cnpj = req.params.cnpj;
	conn.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ${cnpj}`, async (err: any, results: any) => {
		if (err) {
			console.log(err);
		} else {
			if (results.length > 0) {
				let password = Math.random().toString(36).substring(2, 8); //Gera uma senha aleatória
				const passwordEncrypted = bcrypt.hash(password, 5); //Criptografa a senha
				passwordEncrypted
					.then((result) => {
						if (result) {
							const data = {
								PASSWORD: result
							};
							conn.query(`UPDATE SYSLOGINREQUEST SET ? WHERE CNPJ = ${cnpj}`, [ data ], (err: any) => {
								if (err) {
									console.log(err);
								} else {
									const SendEmailService = new sendEmailService(1,results[0])
									SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
									res
										.status(200)
										.json({
											message: `Um email com a nova senha foi enviado para ${results[0].EMAIL}`
										});
								}
							});
						} else {
							res.status(400).json({ message: `Erro ao atualizar a senha` });
						}
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				res.status(400).json({ message: `Usuário não encontrado` });
			}
		}
	});
});

routes.delete('/:id', (req: Request, res: Response) => { 
	const id = Number(req.params.id);
	conn.query(`SELECT * FROM SYSSELECTTABLECOLUMN WHERE idUser = ${id}`, (err: any, results: any) => {
		try {
			if (err) {
				console.log(err);
			} else {
				if (results.length > 0) { 
					conn.query(`DELETE FROM SYSSELECTTABLECOLUMN WHERE idUser = ${id}`, (err: any, result: any) => { //Deleta as colunas do usuário
						if (err) {
							console.log(err);
						} else {
							if (result) {
								ClientesModel.deleteClient(id, res);
							}
						}
					});
				}
			}
		} catch (error) {
			console.error(error);
		}
	});
});

export default routes;
