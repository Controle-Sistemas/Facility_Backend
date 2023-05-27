import connection from '..';

class sysRamosAtividade {
	getAllSysRamosAtividade(res: any) {
 
		connection.query('SELECT * FROM SYSRAMOSATIVIDADE', (error: any, results: any, fields: any) => {
			if (error) {
				res.status(400).send(error);
			} else {
				res.status(200).json(results);
			}
		});
	}

	getSysRamosAtividadeByName(name: string, res: any) {
		connection.query('SELECT * FROM SYSRAMOSATIVIDADE WHERE descricao = ?',	[ name ],(error: any, results: any, fields: any) => {
				if (error) {
					res.status(400).send(error);
				} else {
					if(results.length > 0){
                        res.status(200).send(results);
                    } else {
                        res.status(404).send({
                            message: 'Ramo de atividade não encontrado'
                        });
                    }
				}
			}
		);
	}

    getSysRamosAtividadeByIdCloud(idCloud: string, res: any) {
		connection.query('SELECT RAMODEATIVIDADE FROM SYSLOGINREQUEST WHERE IDCLOUD = ?',	[ idCloud ],(error: any, results: any, fields: any) => {
				if (error) {
					res.status(400).send(error);
				} else {
					if(results.length > 0){
                        res.status(200).send(results);
                    } else {
                        res.status(404).send({
                            message: `Ramo de atividade do cliente de idCloud ${idCloud} não encontrado`
                        });
                    }
				}
			}
		);
	}

    addSysRamosAtividade(sysRamosAtividade: any, res: any) {
        connection.query('INSERT INTO SYSRAMOSATIVIDADE SET ?', sysRamosAtividade, (error: any, results: any, fields: any) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(results);
            }
        });
    }

    updateSysRamosAtividade(name:string,sysRamosAtividade: any, res: any) {
        connection.query('UPDATE SYSRAMOSATIVIDADE SET ? WHERE descricao = ?', [sysRamosAtividade, name], (error: any, results: any, fields: any) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(results);
            }
        });

    }

    deleteSysRamosAtividade(name:string, res: any) {
        connection.query('DELETE FROM SYSRAMOSATIVIDADE WHERE descricao = ?', [name], (error: any, results: any, fields: any) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).send(results);
            }
        });
    }


}

export default new sysRamosAtividade();
