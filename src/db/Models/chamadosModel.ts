import connection from "..";
import { Request, Response } from "express";


class Chamados {
    getAll(res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamados encontrados",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getChamadoById(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getChamadoBySector(sector: number, res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS WHERE SETOR = ${sector}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getChamadoByStatus(status: number, res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS WHERE STATUS = ${status}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getChamadoByInternalId(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS WHERE IDINTERNO = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getChamadoByUserId(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM CHAMADOS WHERE IDUSUARIO = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Chamado encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum chamado encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    createChamado(chamadoData:any, res: Response) {
        try {
            connection.query(`INSERT INTO CHAMADOS SET ?`, chamadoData, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Chamado criado com sucesso",
                        data: results
                    });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    updateChamado(id: number, chamadoData: any, res: Response) {
        try {
            connection.query(`UPDATE CHAMADOS SET ? WHERE ID = ${id}`, chamadoData, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Chamado atualizado com sucesso",
                        data: results
                    });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    deleteChamado(id: number, res: Response) {
        try {
            connection.query(`DELETE FROM CHAMADOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Chamado deletado com sucesso",
                        data: results
                    });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

}

export default new Chamados();
