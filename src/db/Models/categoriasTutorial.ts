import conn from '..'
import { Response } from 'express'

class CategoriasModel { 

    getAll(res: Response) {
        try {
            conn.query('SELECT * FROM tutoriaiscategoria', (err, results) => {
                if (err) {
                    res.status(503).send(err)
                } else {
                    res.status(200).send(results)
                }
            })
            
        } catch (error) {
            res.status(500).send(error)

            
        } finally {
            conn.end()
        }
       
    }

    getById(id: number, res: Response) {
      try {
        conn.query('SELECT * FROM tutoriaiscategoria WHERE id = ?', [id], (err, results:any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if (results.length > 0) {
                    res.status(200).send(results)
                } else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    })
                }
            }
        }) 
      } catch (error) {
        res.status(500).send(error)

      } finally {
        conn.end()
      }
    }

    getByNome(nome: string, res: Response) {
        conn.query('SELECT * FROM tutoriaiscategoria WHERE nome = ?', [nome], (err, results:any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if (results.length > 0) {
                    res.status(200).send(results)
                } else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    })
                }
            }   
        })
    }

    create(categoria: any, res: Response) {
        conn.query('INSERT INTO tutoriaiscategoria SET ?', [categoria], (err, results) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send({
                    data: results,
                    message: 'Categoria criada com sucesso'
                })
            }
        })
    }

    update(id: number, categoria: any, res: Response) {
        conn.query('UPDATE tutoriaiscategoria SET ? WHERE id = ?', [categoria, id], (err, results:any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if(results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Categoria atualizada com sucesso'
                    })
                } else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    })
                }
            }
        })
    }

    delete(id: number, res: Response) {
        conn.query('DELETE FROM tutoriaiscategoria WHERE id = ?', [id], (err, results:any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if(results.affectedRows > 0) {
                    res.status(200).send({
                        data: results,
                        message: 'Categoria deletada com sucesso'
                    })
                } else {
                    res.status(404).send({
                        message: 'Categoria não encontrada'
                    })
                }

            }
        })
    }



}

export default new CategoriasModel()