import connection from "..";
import { Request, Response } from "express";

class Internos {
    getAll(res: Response) {
        try {
            connection.query(`SELECT * FROM INTERNOS`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getInternalById(id: number, res: Response) {
        try {
            connection.query(`SELECT * FROM INTERNOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Interno encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    getInternalBySector(sector: number, res: Response) {
        try {
            connection.query(`SELECT * FROM INTERNOS WHERE SETOR = ${sector}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    createInternal(internal: any, res: Response) {
        try {
            connection.query(`INSERT INTO INTERNOS SET ?`, internal, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                        res.status(200).send({
                            message: "Interno criado",
                            data: results
                        });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    updateInternal(id:number,internal: any, res: Response) {
        try {
            connection.query(`UPDATE INTERNOS SET ? WHERE ID = ${id}`, internal, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Interno atualizado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum interno atualizado"
                        });
                    }
                }
            })
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    deleteInternal(id:number, res: Response) {
        try {
            connection.query(`DELETE FROM INTERNOS WHERE ID = ${id}`, (err, results: any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Interno deletado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum interno deletado"
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

export default new Internos();