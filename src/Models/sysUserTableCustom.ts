import conn from '../db'
import {  Response } from 'express';

class UserTableCustomModel {

    editTable(tableData: any,idUser:number,res:Response) {
        
        conn.query(
            `UPDATE sysselecttablecolumn SET ? WHERE  idUser = ${idUser} and idTable = ${tableData.idTable} AND id = ${tableData.id}`,[tableData],
        )
    }

    getTable(idUser:number,idTable:number,res:Response) {
        conn.query(
            `SELECT * FROM sysselecttablecolumn WHERE idUser = ${idUser} AND idTable = ${idTable}`,
            (err,results) => {
                if (err) {
                    res.status(400).send({
                        message: err

                    })
                } else {
                    console.log(typeof results)
                    if(results.toString().length > 0){
                        res.status(200).send({
                            message: 'Tabela listada com sucesso',
                            data: results
                        })
                    } else {
                        res.status(404).send({
                            message: 'Tabela não encontrada'
                        })
                    }
                }
            }	
        );
    }

    createTable(tableData: any,res:Response) {
        conn.query(
            `INSERT INTO sysselecttablecolumn SET ?`,[tableData],
            (err) => {
                if (err) {
                    console.log(err)
                }
            }	
        );
    }

    deleteTable(idTable:number,res:Response) {
        conn.query(
            `DELETE FROM sysselecttablecolumn WHERE idUser = ${idTable}`,
            (err) => {
                if (err) {
                    res.status(400).send({
                        message: err

                    })
                } else {
                    res.status(200).send({
                        message: 'Tabela deletada com sucesso'
                    })
                }
            }	
        );
    }

    deleteTableByUser(idUser:number,res:Response) {
        conn.query(
            `DELETE FROM sysselecttablecolumn WHERE  idUser = ${idUser}`);
    }

   

}

export default new UserTableCustomModel();