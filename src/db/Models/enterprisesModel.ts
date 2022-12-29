import connection from '..';
import { Request, Response } from 'express';

class EnterprisesModel {
	
	getEnterprises(res: Response) {
		//lista todas as contas de cnpj cadastradas
		connection.query(`SELECT * FROM EMPRESAS`, (err: any, results: any) => {
			if (err) {
				res.status(500).send({
					message: err
				});
			} else {
				res.status(200).send({
					message: 'Empresas listadas com sucesso',
					data: results
				});
			}
		});
	}

	getEnterprise(id: number, res: Response) {
		//lista uma empresa especifica
		connection.query(`SELECT * FROM EMPRESAS WHERE IDCLOUD = ?`, [ id ], (err: any, results: any) => {
			if (err) {
				res.status(500).send({
					message: err
				});
			} else {
				if (results.length > 0) {
					res.status(200).send({
						message: 'Empresa listada com sucesso',
						data: results
					});
				} else {
					res.status(404).send({
						message: 'Empresa não encontrada'
					});
				}
			}
		});
	}

	getEnterpriseCnpj(cnpj:string, res:Response){
		//lista uma empresa especifica
		connection.query(`SELECT * FROM EMPRESAS WHERE CNPJ = ?`, [ cnpj ], (err: any, results: any) => {
			if (err) {
				res.status(500).send({
					message: err
				});
			} else {
				if (results.length > 0) {
					res.status(200).send({
						message: 'Empresa listada com sucesso',
						data: results
					});
				} else {
					res.status(404).send({
						message: 'Empresa não encontrada'
					});
				}
			}
		});

	}

	createEnterprise(enterpriseData: any, res: Response) {
		//cria uma nova empresa
		connection.query(`INSERT INTO EMPRESAS SET ?`, [ enterpriseData ], (err: any, results: any) => {
			if (err) {
				res.status(500).send({
					message: 'Erro ao criar empresa',
					errormessage: err
				});
			} else {
				res.status(200).send({
					message: 'Empresa criada com sucesso',
					data: results
				});
			}
		});
	}

	updateEnterprise(id: number, enterpriseData: any, res: Response) {
		//atualiza uma empresa
		connection.query(
			`UPDATE EMPRESAS SET ? WHERE idCloud = ?`,
			[ enterpriseData, id ],
			(err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.affectedRows > 0) {
						res.status(200).send({
							message: 'Empresa Atualizada com sucesso',
							data: results
						});
					} else {
						res.status(404).send({
							message: 'Empresa não encontrada'
						});
					}
				}
			}
		);
	}

	deleteEnterprise(id: number, res: Response) {
		//deleta uma empresa
		connection.query(`DELETE FROM EMPRESAS WHERE idCloud = ?`, [ id ], (err: any, results: any) => {
			if (err) {
				res.status(500).send({
					message: err
				});
			} else {
				if (results.affectedRows > 0) {
					res.status(200).send({
						message: 'Empresa Deletada com sucesso',
						data: results
					});
				} else {
					res.status(404).send({
						message: 'Empresa não encontrada'
					});
				}
			}
		});
	}
}

export default new EnterprisesModel();
