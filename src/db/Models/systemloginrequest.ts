import connection from '..';
import { SysLoginType } from '../../types';

class ModeloClientes {

	getClientsWithoutGroup(res: any) {
		//lista todas os clientes cadastradas sem grupo
		try {
			connection.query(
				`SELECT ID, NOME, NOMEESTABELECIMENTO AS 'ESTABELECIMENTO', IDCLOUD, CNPJ 
				FROM SYSLOGINREQUEST 
				WHERE ADMIN = 0 AND SYSLOGINREQUEST.CNPJ NOT IN 
				(SELECT CNPJ FROM FILIAIS UNION SELECT CNPJ FROM  MATRIZES)`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Clientes disponível para grupo listados com sucesso',
						data: results
					});
				}
			});

		} catch (error) {
			console.error(error);
		}
	}

	getClients(res: any) {
		//Retorna todos os clientes
		try {
			connection.query('SELECT * FROM SYSLOGINREQUEST', (err: any, results: any) => {
				if (err) {
						res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Clientes listados com sucesso',
						data: results
					});
					console.log(results)
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getAdmins(res: any) {
		//Retorna todos os clientes
		try {
			connection.query('SELECT * FROM SYSLOGINREQUEST WHERE ADMIN = 1', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Admins listados com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getClientById(id: number, res: any) {
		//Retorna um cliente pelo id
		try {
			connection.query('SELECT * FROM SYSLOGINREQUEST WHERE id = ?', [ id ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.length > 0) {
						res.status(200).send({
							message: 'Cliente listado com sucesso',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Cliente não encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	getClientByCNPJ(cnpj: number, res: any) {
		//Retorna um cliente pelo cnpj
		try {
			connection.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ${cnpj}`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.length > 0) {
						res.status(200).send({
							message: 'Cliente listado com sucesso',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Cliente não encontrado, verifique se o CNPJ está correto'
						});
					}
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	getFields(res: any) {
		//Retorna todos os campos de um cliente
		try {
			connection.query('DESCRIBE SYSLOGINREQUEST', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					results.push({
						Field: 'Ações',
						Type: 'button',
						Null: 'NO',
						Key: ''
					});
					res.status(200).send({
						message: 'Campos listados com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}

	createClient(sysLogin: SysLoginType, res: any) {
		//Cria um cliente
		try {
			connection.query('INSERT INTO SYSLOGINREQUEST SET ?', [ sysLogin ]);
		} catch (error) {
			console.error(error);
		} 
	}

	updateClient(id: number, sysLogin: SysLoginType, res: any) {
		//Atualiza um cliente
		try {
			connection.query(
				'UPDATE SYSLOGINREQUEST SET ? WHERE id = ?',
				[ sysLogin, id ],
				(err: any, results: any) => {
					if (err) {
						res.status(500).send({
							message: err
						});
					} else {
						res.status(200).send({
							message: 'Cliente atualizado com sucesso',
							data: results
						});
					}
				}
			);
		} catch (error) {
			console.error(error);
		} 
	}

	deleteClient(id: number, res: any) {
		//Deleta um cliente
		try {
			connection.query('DELETE FROM SYSLOGINREQUEST WHERE id = ?', [ id ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Cliente deletado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		} 
	}
}

export default new ModeloClientes();
