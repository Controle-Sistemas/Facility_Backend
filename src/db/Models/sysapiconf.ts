import connection from '..'
import { SysApiConfType } from '../../types'


class ModeloSysApiConf {

    getSysApiConf(res: any) {
        try {
            connection.query('SELECT * FROM sysapiconf', (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SysApiConf listados com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally{
            connection.end()
        }
    }

    getSysApiConfById(id: number, res: any) {
        try {
            connection.query('SELECT * FROM sysapiconf WHERE id = ?', [id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err

                    })
                } else {
                    res.status(200).send({
                        message: 'SysApiConf listado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            connection.end()
        }
    }

    createSysApiConf(sysApiConf: SysApiConfType, res: any) {
        try {
            connection.query('INSERT INTO sysapiconf SET ?;', [sysApiConf], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SysApiConf criado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            connection.end()
        }
    }

    editSysApiConf(id: number, sysApiConf: SysApiConfType, res: any) {
        try {
            connection.query('UPDATE sysapiconf SET ? WHERE id = ?', [sysApiConf, id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SysApiConf editado com sucesso',
                        data: results

                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            connection.end()
        }

    }

    deleteSysApiConf(id: number, res: any) {
        try {
            connection.query('DELETE FROM sysapiconf WHERE id = ?', [id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SysApiConf deletado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        } finally {
            connection.end()
        }
    }
}

export default new ModeloSysApiConf();
