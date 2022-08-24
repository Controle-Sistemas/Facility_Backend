import connection from '..';
import { Response } from 'express';

class StatusChamado {
    getAll(res: Response) {
        try {
            connection.query(`SELECT * FROM STATUSCHAMADOS`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrados",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    } 

    getStatusChamadoById(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM STATUSCHAMADOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getStatusChamadoByName(nome: string, res: Response) {
        try {
            connection.query(`SELECT * FROM STATUSCHAMADOS WHERE NOME = ${nome}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Status de chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    createStatusChamado(statusChamado: any, res: Response) {
        try {
            connection.query(`INSERT INTO STATUSCHAMADOS SET ?`, statusChamado, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Status de chamado criado",
                        data: results
                    });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    updateStatusChamado(id: number, statusChamado: any, res: Response) {
        try {
            connection.query(`UPDATE STATUSCHAMADOS SET ? WHERE ID = ${id}`, statusChamado, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if(results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Status de chamado atualizado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    deleteStatusChamado(id: number, res: Response) {
        try {
            connection.query(`DELETE FROM STATUSCHAMADOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if(results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Status de chamado deletado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum status de chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }
}

export default new StatusChamado();