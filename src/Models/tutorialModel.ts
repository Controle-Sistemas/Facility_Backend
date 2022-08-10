import { Response } from 'express';
import conn from '../db'

class TutorialModel{

    getTutorials(res: Response){
        conn.query(
            'SELECT * FROM tutoriais',
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        data: results,
                        message: 'Tutoriais retornados com sucesso'
                    });
                }
            }
        );
    }

    getTutorialById(id: number, res: Response){
        conn.query(
            'SELECT * FROM tutoriais WHERE ID = ?',
            [id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if(results.length > 0){
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial retornado com sucesso'
                    });
                    } else {
                        res.status(404).send({
                            data: results,
                            message: 'Tutorial não encontrado'
                        });
                    }
                }
            }
        );
    }

    getTutorialByCategoria(categoria: number, res: Response){
        conn.query(
            'SELECT * FROM tutoriais WHERE CATEGORIA = ?',
            [categoria],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if(results.length > 0){
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial retornado com sucesso'
                    });
                    } else {
                        res.status(404).send({
                            data: results,
                            message: 'Tutorial não encontrado'
                        });
                    }
                }
            }
        );
    }

    createTutorial(tutoriais: any, res: Response){
        conn.query(
            'INSERT INTO tutoriais SET ?',
            tutoriais,
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial criado com sucesso'
                    });
                }
            }
        );
    }

    updateTutorial(id: number, tutoriais: any, res: Response){
        conn.query(
            'UPDATE tutoriais SET ? WHERE ID = ?',
            [tutoriais, id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if(results.affectedRows > 0){
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial atualizado com sucesso'
                    });
                    } else {
                        res.status(404).send({
                            data: results,
                            message: 'Tutorial não encontrado'
                        });
                    }

                }
            }
        );
    }

    deleteTutorial(id: number, res: Response){
        conn.query(
            'DELETE FROM tutoriais WHERE ID = ?',
            [id],
            (err: any, results: any) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    if(results.affectedRows > 0){
                    res.status(200).send({
                        data: results,
                        message: 'Tutorial deletado com sucesso'
                    });
                    } else {
                        res.status(404).send({
                            data: results,
                            message: 'Tutorial não encontrado'
                        });
                    }
                }
            }
        );
    }

}

export default new TutorialModel()