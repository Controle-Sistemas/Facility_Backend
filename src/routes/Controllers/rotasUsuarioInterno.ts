import express, { Request, Response } from 'express';
import internalUserModel from '../../db/Models/internalUserModel';
import connection from '../../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendEmailService from '../../services/sendEmailService';
import auth from '../../config/auth';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	internalUserModel.getAll(res);
});

router.get('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	internalUserModel.getInternalById(id, res);
});

router.get('/setor/:setor', (req: Request, res: Response) => {
	const idSetor = Number(req.params.setor);
	internalUserModel.getInternalBySector(idSetor, res);
});

router.post('/', async (req: Request, res: Response) => {
	const internalUserData = req.body;
	if (internalUserData.SENHA === '' || !internalUserData.SENHA) {
		let password = Math.random().toString(36).substring(2, 8); //Gera uma senha aleatória
		const passwordEncrypted = bcrypt.hash(password, 5); //Criptografa a senha
		await passwordEncrypted
			.then((result) => {
				internalUserData.SENHA = result; //Adiciona a senha criptografada ao usuário
			})
			.catch((err) => {
				console.log(err);
			});
		if (res.statusCode !== 200) {
			res.status(400).json({ message: `Erro ao criar o INTERNO` });
		} else {
			console.log(internalUserData);
			internalUserModel.createInternal(internalUserData, res); //Cria o usuário
			const SendEmailService = new sendEmailService(2,internalUserData);
			SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
		}
	}
});

router.post('/login', (req: Request, res: Response) => {
	const internalUserData = req.body;
    connection.query(`SELECT * FROM INTERNOS WHERE USUARIO = '${internalUserData.USUARIO}'`, async(err, results:any) => {
		if(err){
			console.log(err)
		} else {
			if(results.length > 0){
				const passwordEncrypted = results[0].SENHA
				await bcrypt.compare(internalUserData.SENHA, passwordEncrypted).then((result) => {
					//Compara a senha criptografada com a senha digitada
					if (result) {
							let token = jwt.sign(
								{
									//Cria o token
									id: results[0].ID,
									usuario: results[0].USUARIO,
								},
								auth.secret,
								{
									expiresIn: auth.expireIn
								})

						res.status(200).json({ message: `Interno logado com sucesso`, token, id:results[0].ID,isAdmin:false}); //Retorna o token e se o usuário é admin
						
					} else {
						res.status(400).json({ message: `Senha incorreta` }); //Retorna uma mensagem de erro
					}
				});
			} else {
				res.status(400).json({ message: `Usuario não cadastrado` });
			}
			}
	})
});

router.patch('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const internalUserData = req.body;
	internalUserModel.updateInternal(id, internalUserData, res);
});
router.patch('/forgot-password/:user', (req: Request, res: Response) => {  //Rota para recuperar a senha de um usuário
	const user = req.params.user;
	connection.query(`SELECT * FROM internos WHERE USUARIO = '${user}'`, async (err: any, results: any) => {
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
								SENHA: result
							};
							connection.query(`UPDATE internos SET ? WHERE USUARIO = '${user}'`, [ data ], (err: any) => {
								if (err) {
									console.log(err);
								} else {
									const SendEmailService = new sendEmailService(2,results[0])
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
router.delete('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	internalUserModel.deleteInternal(id, res);
});

export default router;
