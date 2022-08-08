import conn from '../db';
import {Response} from 'express';
import path from 'path';
class DocumentsModel{

    getAllDocuments(res: Response){
        conn.query(
            `SELECT * FROM DOCUMENTOS`,
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {

                    res.status(200).send({
                        data: results,
                        message: 'Lista de documentos'

                    });
                }
            }
        );
    }

    getDocumentById(id: number, res: Response){
        conn.query(
            `SELECT * FROM DOCUMENTOS WHERE ID = ?`,
            [id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento encontrado'});
                }
            }
        );
    }

    getDocumentByUserCNPJ(cnpj: string, res: Response){
        conn.query(
            `SELECT * FROM DOCUMENTOS WHERE CNPJ = ?`,
            [cnpj],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento encontrado'});
                }
            }
        );
    }

    getDocumentByUserId(id: number, res: Response){
        conn.query(
            `SELECT * FROM DOCUMENTOS WHERE ID = ?`,
            [id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento encontrado'});
                }
            }
        );
    }

    addDocument(document: any, res: Response){
        conn.query(
            `INSERT INTO DOCUMENTOS SET ?`,
            [document],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento adicionado'});
                }
            }
        )
    }

    updateDocument(id: number, document: any, res: Response){
        conn.query(
            `UPDATE DOCUMENTOS SET ? WHERE ID = ?`,
            [document, id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento atualizado'});
                }
            }
        )
    }

    deleteDocument(id: number, res: Response){
        conn.query(
            `DELETE FROM DOCUMENTOS WHERE ID = ?`,
            [id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({data:results, message: 'Documento deletado'});
                }
            }
        )
    }


}

export default new DocumentsModel;