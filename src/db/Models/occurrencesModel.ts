import connection from "..";
import { Request, Response } from "express";

class Ocorrencias{
    getAll(res: Response) {
        try {
            connection.query(`SELECT * FROM OCORRENCIAS`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencias encontradas",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getOccurrenceById(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM OCORRENCIAS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getOccurrenceBySector(sector: number, res: Response) {
        try {
            connection.query(`SELECT * FROM OCORRENCIAS WHERE SETOR = ${sector}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getOccurrenceByInterno(interno: number, res: Response) {
        try {
            connection.query(`SELECT * FROM OCORRENCIAS WHERE IDINTERNO = ${interno}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getOccurrenceByChamado(chamado: number, res: Response) {
        try {
            connection.query(`SELECT * FROM OCORRENCIAS WHERE IDCHAMADO = ${chamado}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Ocorrencia encontrada",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    createOccurrence(ocorrenciaData: any, res: Response) {
        try {
            connection.query(`INSERT INTO OCORRENCIAS SET ?`, ocorrenciaData, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Ocorrencia criada",
                        data: results
                    });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    updateOccurrence(id: number, ocorrenciaData: any, res: Response) {
        try {
            connection.query(`UPDATE OCORRENCIAS SET ? WHERE ID = ${id}`, ocorrenciaData, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                   if(results.affectedRows > 0){
                       res.status(200).send({
                           message: "Ocorrencia atualizada",
                           data: results
                       });
                   } else {
                          res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
                          });
                     }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    deleteOccurrence(id: number, res: Response) {
        try {
            connection.query(`DELETE FROM OCORRENCIAS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if(results.affectedRows > 0){
                        res.status(200).send({
                            message: "Ocorrencia deletada",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhuma ocorrencia encontrada"
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

export default new Ocorrencias();