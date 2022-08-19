import conn from '..';
import { Response } from 'express';

class UserCardModel {
    getUserCard(id: number,res: Response) {
        try {
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
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }  

    }

    getUserCardByUser(id: number,res: Response) {
        try {
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
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    addUserCard(cardData: any,res: Response) {
        try {
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
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }  

    }

    updateUserCard(cardData: any,idUser: number,idCard: number,res: Response) {
        try {
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
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }  
    }

    deleteUserCard(idUser: number,idCard: number,res: Response) {
        try {
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
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }  
    }
}

export default new UserCardModel();