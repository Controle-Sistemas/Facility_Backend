import connection from '..';
import { SysLoginType } from '../../types';

class ModeloClientes {
	getClients(res: any) {
		//Retorna todos os clientes
		try {
			connection.query('SELECT * FROM sysloginrequest', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Clientes listados com sucesso',
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
			connection.query('SELECT * FROM sysloginrequest WHERE id = ?', [ id ], (err: any, results: any) => {
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
			connection.query(`SELECT * FROM sysloginrequest WHERE CNPJ = ${cnpj}`, (err: any, results: any) => {
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
			connection.query('DESCRIBE sysloginrequest', (err: any, results: any) => {
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
			connection.query('INSERT INTO sysloginrequest SET ?', [ sysLogin ]);
		} catch (error) {
			console.error(error);
		} 
	}

	updateClient(id: number, sysLogin: SysLoginType, res: any) {
		//Atualiza um cliente
		try {
			connection.query(
				'UPDATE sysloginrequest SET ? WHERE id = ?',
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
			connection.query('DELETE FROM sysloginrequest WHERE id = ?', [ id ], (err: any, results: any) => {
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
