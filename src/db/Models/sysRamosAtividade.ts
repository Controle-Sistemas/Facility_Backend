import connection from '..';

class sysRamosAtividade {
	getAllSysRamosAtividade(res: any) {
		try {
			connection.query('SELECT * FROM sysRamosAtividade', (error: any, results: any, fields: any) => {
				if (error) {
					res.status(400).send(error);
					console.log(error);
				} else {
					res.status(200).json(results);
				}
			});
		} catch (error) {
			console.error(error);
		}  
			  
	}

	getSysRamosAtividadeByName(name: string, res: any) {
		try {
			connection.query(
				'SELECT * FROM sysRamosAtividade WHERE descricao = ?',
				[ name ],
				(error: any, results: any, fields: any) => {
					if (error) {
						res.status(400).send(error);
					} else {
						if (results.length > 0) {
							res.status(200).send(results);
						} else {
							res.status(404).send({
								message: 'Ramo de atividade não encontrado'
							});
						}
					}
				}
			);
		} catch (error) {
			console.error(error);
		}  
	}

	addSysRamosAtividade(sysRamosAtividade: any, res: any) {
		try {
			connection.query(
				'INSERT INTO sysRamosAtividade SET ?',
				sysRamosAtividade,
				(error: any, results: any, fields: any) => {
					if (error) {
						res.status(400).send(error);
					} else {
						res.status(200).send(results);
					}
				}
			);
		} catch (error) {
			console.error(error);
		}  
			  
	}

	updateSysRamosAtividade(name: string, sysRamosAtividade: any, res: any) {
		try {
			connection.query(
				'UPDATE sysRamosAtividade SET ? WHERE descricao = ?',
				[ sysRamosAtividade, name ],
				(error: any, results: any, fields: any) => {
					if (error) {
						res.status(400).send(error);
					} else {
						res.status(200).send(results);
					}
				}
			);
		} catch (error) {
			console.error(error);
		}  

	}

	deleteSysRamosAtividade(name: string, res: any) {
		try {
			connection.query(
				'DELETE FROM sysRamosAtividade WHERE descricao = ?',
				[ name ],
				(error: any, results: any, fields: any) => {
					if (error) {
						res.status(400).send(error);
					} else {
						res.status(200).send(results);
					}
				}
			);
		} catch (error) {
			console.error(error);
		}  
	}
}

export default new sysRamosAtividade();
