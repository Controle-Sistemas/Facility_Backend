import connection from "..";
import { Request, Response } from "express";

class TerminalModel{

    getTerminals(req: Request, res: Response) {
        connection.query(`SELECT * FROM TERMINAIS`, (err: any, results: any) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            } else {
                res.status(200).send({
                    message: 'TERMINAIS listados com sucesso',
                    data: results
                });
            }
        });
    }

    getTerminal(id: number, res: Response) {
        connection.query(`SELECT * FROM TERMINAIS WHERE idEmpresa = ?`, [id], (err: any, results: any) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            } else {
                res.status(200).send({
                    message: 'Terminal listado com sucesso',
                    data: results
                });
            }
        });
    }

    createTerminal(terminalData: any, res: Response) {
        connection.query(`INSERT INTO TERMINAIS SET ?`, [terminalData]);
    }

    updateTerminal(id:number,terminalData: any, res: Response) {
        connection.query(`UPDATE TERMINAIS SET ? WHERE id = ?`, [terminalData,id], (err: any, results: any) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            } else {
                res.status(200).send({
                    message: 'Terminal Atualizado com sucesso',
                    data: results
                });
            }
        });
    }

    deleteTerminal(id:number, res: Response) {
        connection.query(`DELETE FROM TERMINAIS WHERE id = ?`, [id], (err: any, results: any) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
            } else {
                res.status(200).send({
                    message: 'Terminal deletado com sucesso',
                    data: results
                });
            }
        });
    }

}

export default new TerminalModel();