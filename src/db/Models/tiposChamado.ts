import conn from '..'
import _ from 'lodash'
import { Response } from 'express'
interface CHAMADOTYPE {
    ID: string,
    TITLE: string,
    SECTIONS: Array<{
        ID: string,
        TITLE: string,
        ITENS: Array<{
            ID: string,
            DESCRIPTION: string,
            REQUIRED: boolean
        }>
    }>
}

class TiposModel {

    getAll(res: Response) {
        var data = {
            TYPES: {},
            SECTIONS: {},
            ITEMS: {}
        }

        conn.query(`SELECT * FROM CHAMADOTYPE`
            , (err, results) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    data['TYPES'] = results;
                    conn.query(`SELECT * FROM CHAMADOTYPESECTION`
                        , (err, results) => {
                            if (err) {
                                res.status(500).send(err)
                            } else {
                                data['SECTIONS'] = results;
                                conn.query(`SELECT * FROM CHAMADOTYPESECTIONITEM`
                                    , (err, results) => {
                                        if (err) {
                                            res.status(500).send(err)
                                        } else {
                                            data['ITEMS'] = results;
                                            res.status(200).send(
                                                {
                                                    message: 'Checklistis completos listado com sucesso',
                                                    data: data
                                                }
                                            )
                                        }
                                    })
                            }
                        })
                }
            })
    }

    getById(id: string, res: Response) {
        try {
            conn.query(`SELECT CHAMADOTYPESECTIONITEM.DESCRIPTION as 'ITEM', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.ID = '${id}' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID`
                , (err, results: any) => {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        if (results.length > 0) {
                            res.status(200).send({ message: `Tipo de id - ${id} - listado com sucesso`, data: results })
                        } else {
                            res.status(404).send({
                                message: 'Checklist não encontrada'
                            })
                        }
                    }
                })
        } catch (error) {
            res.status(500).send(error)

        }

    }

    getByName(nome: string, res: Response) {

        conn.query(`SELECT CHAMADOTYPESECTIONITEM.DESCRIPTION as 'ITEM', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.TITLE = '${nome}' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID`
            , (err, results: any) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    if (results.length > 0) {
                        res.status(200).send({ message: `Tipo ${nome} listado com sucesso`, data: results })
                    } else {
                        res.status(404).send({
                            message: 'Checklist não encontrada'
                        })
                    }
                }
            })
    }

    getByChamadoId(id: string, res: Response) {
        try {
            conn.query(`SELECT CHAMADOTYPESECTIONITEM.DESCRIPTION as 'ITEM', CHAMADOTYPESECTIONITEM.REQUIRED as 'REQUIRED',  CHAMADOTYPE.TITLE as 'CHAMADOTYPE', CHAMADOTYPESECTION.TITLE as 'SECTION' from CHAMADOTYPESECTIONITEM join CHAMADOTYPESECTION, CHAMADOTYPE where CHAMADOTYPE.ID = '${id}' and CHAMADOTYPE.ID = CHAMADOTYPESECTION.IDTYPE and CHAMADOTYPESECTIONITEM.IDSECTION = CHAMADOTYPESECTION.ID`
                , (err, results: any) => {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        if (results.length > 0) {
                            res.status(200).send({ message: `Tipo de id - ${id} - listado com sucesso`, data: results })
                        } else {
                            res.status(404).send({
                                message: 'Checklist não encontrada'
                            })
                        }
                    }
                })
        } catch (error) {
            res.status(500).send(error)

        }

    }

    create(tipo: CHAMADOTYPE, res: Response) {
        var statusCode = 200;
        conn.query(`INSERT INTO CHAMADOTYPE (ID , TITLE) VALUES ('${tipo.ID}', '${tipo.TITLE}')`
            , (err, results) => {
                if (err) {
                    statusCode = 500;
                } else {
                    _.map(tipo.SECTIONS, (section) => (
                        conn.query(`INSERT INTO CHAMADOTYPESECTION (ID , TITLE, IDTYPE) VALUES ('${section.ID}', '${section.TITLE}', '${tipo.ID}')`, (err, results) => {
                            if (err) {
                                statusCode = 500;
                            } else {
                                _.map(section.ITENS, (item) => (
                                    conn.query(`INSERT INTO CHAMADOTYPESECTIONITEM (ID , IDSECTION, DESCRIPTION, REQUIRED) VALUES ('${item.ID}', '${section.ID}', '${item.DESCRIPTION}', ${item.REQUIRED})`, (err, results) => {
                                        if (err) {
                                            statusCode = 500;
                                        } 
                                    })
                                ))
                            }
                        })
                    ))
                }
                if (statusCode != 200) {
                    res.status(statusCode).send({
                        data: err,
                        message: `Algo deu errado com a requisição`
                    })
                } else {
                    res.status(statusCode).send({
                        data: tipo,
                        message: `Tipo '${tipo.TITLE}' criado com sucesso`
                    })
                    
                }
            })
    }

    update(id: number, categoria: any, res: Response) {
        conn.query('UPDATE TUTORIAISCATEGORIA SET ? WHERE id = ?', [categoria, id], (err, results: any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if (results.affectedRows > 0) {
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

    delete(id: string, res: Response) {
        conn.query('DELETE FROM CHAMADOTYPE WHERE id = ?', [id], (err, results: any) => {
            if (err) {
                res.status(500).send(err)
            } else {
                if (results.affectedRows > 0) {
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

export default new TiposModel()