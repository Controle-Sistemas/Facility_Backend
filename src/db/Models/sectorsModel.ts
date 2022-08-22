import connection from "..";
import {Response} from "express";

class Sectors {

    getSectors(res:Response) {
       try {
        connection.query(`SELECT * FROM SETORES`, (err, results:any) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                if(results.length > 0) {
                    res.status(200).send({
                        message: "Setores encontrados",
                        data: results
                    });
                } else {
                    res.status(404).send({
                        message: "Nenhum setor encontrado"
                    });
                }
            }
        })
       } catch (error) {
              console.log(error);
              res.status(400).send(error);
       }
    }

    getSectorById(id:number, res:Response) {
        try {
            connection.query(`SELECT * FROM SETORES WHERE ID = ${id}`, (err, results:any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if(results.length > 0) {
                        res.status(200).send({
                            message: "Setor encontrado",
                            data: results
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
                        });
                    }
                }
            })
        } catch(error) {
                console.log(error);
                res.status(400).send(error);
        } 

    }

    createSector(sector:any, res:Response) {
        try {
            connection.query(`INSERT INTO SETORES SET ?`, sector, (err, results:any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.status(200).send({
                        message: "Setor criado com sucesso"
                    });
                }
            }
            );
        } catch(error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    updateSector(id:number, sector:any, res:Response) {
        try {
            connection.query(`UPDATE SETORES SET ? WHERE ID = ${id}`, sector, (err, results:any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    if(results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Setor atualizado com sucesso"
                        });
                    } else {
                        res.status(404).send({
                            message: "Nenhum setor encontrado"
                        });
                    }
                }
            }
            );
        } catch(error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

    deleteSector(id:number, res:Response) {
        try {
            connection.query(`DELETE FROM SETORES WHERE ID = ${id}`, (err, results:any) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                   if(results.affectedRows > 0) {
                       res.status(200).send({
                           message: "Setor deletado com sucesso"
                       });
                   } else {
                          res.status(404).send({
                            message: "Nenhum setor encontrado"
                          });
                     }
                }
            }
            );
        } catch(error) {
            console.log(error);
            res.status(400).send(error);
        }
    }

}

export default new Sectors();