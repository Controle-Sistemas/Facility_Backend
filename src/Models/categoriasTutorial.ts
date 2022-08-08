import conn from '../db'
import { Response } from 'express'

class CategoriasModel {

    getAll(res: Response) {
        conn.query('SELECT * FROM tutoriaiscategoria', (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    }

    getById(id: number, res: Response) {
        conn.query('SELECT * FROM tutoriaiscategoria WHERE id = ?', [id], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    }

    getByNome(nome: string, res: Response) {
        conn.query('SELECT * FROM tutoriaiscategoria WHERE nome = ?', [nome], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }   
        })
    }

    create(categoria: any, res: Response) {
        conn.query('INSERT INTO tutoriaiscategoria SET ?', [categoria], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    }

    update(id: number, categoria: any, res: Response) {
        conn.query('UPDATE tutoriaiscategoria SET ? WHERE id = ?', [categoria, id], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    }

    delete(id: number, res: Response) {
        conn.query('DELETE FROM tutoriaiscategoria WHERE id = ?', [id], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(results)
            }
        })
    }



}

export default new CategoriasModel()