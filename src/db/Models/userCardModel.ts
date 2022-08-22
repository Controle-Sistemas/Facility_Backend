import conn from '..';
import { Response } from 'express';

class UserCardModel {
    getUserCard(id: number,res: Response) {
        conn.query(
            `SELECT * FROM USERCARD WHERE id = ?`,
            [id],
            (err, result:any) => {
                if (err) {
                    console.log(err);
                } else {

                    if(result.length > 0){
                        res.status(200).json({
                            message: 'Card Encontrado',
                            data: result
                        });
                    } else {
                        res.status(404).json({message: 'Nenhum registro encontrado'});
                    }
                }
            }
        )
    }

    getUserCardByUser(id: number,res: Response) {
        conn.query(
            `SELECT * FROM USERCARD WHERE IDUSER = ?`,
            [id],
            (err, result:any) => {
                if (err) {
                    console.log(err);
                } else {
                    if(result.length > 0){
                        res.status(200).json({
                            message: 'Cards Encontrados',
                            data: result
                        });
                    } else {
                        res.status(404).json({message: 'Nenhum registro encontrado',data: []});
                    }
                }
                }
        )
    }

    addUserCard(cardData: any,res: Response) {
        conn.query(
            `INSERT INTO USERCARD SET ?`,
            [cardData],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({
                        message: 'Card Adicionado',
                        data: result
                    }); 
                }
            }
        )
    }

    updateUserCard(cardData: any,idUser: number,idCard: number,res: Response) {
        conn.query(
            `UPDATE USERCARD SET ? WHERE IDUSER = ? AND ID = ?`,
            [cardData,idUser,idCard],
            (err, result:any) => {
                if (err) {
                    console.log(err);
                } else {
                    if(result.affectedRows > 0){
                        res.status(200).json({
                            message: 'Card Atualizado',
                            data: result
                        }); 
                    } else {
                        res.status(404).json({message: 'Nenhum registro encontrado'});
                    }

                }
            }
        )
    }

    deleteUserCard(idUser: number,idCard: number,res: Response) {
        conn.query(
            `DELETE FROM USERCARD WHERE IDUSER = ? AND ID = ?`,
            [idUser,idCard],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({
                        message: 'Card Deletado',
                        data: result
                    }); 

                }
            }
        )
    }



}

export default new UserCardModel();