import connection from '..'
import { SysApiConfType } from '../../types'


class ModeloSysApiConf {

    getSysApiConf(res: any) {
        try {
            connection.query('SELECT * FROM SYSAPICONF', (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SYSAPICONF listados com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    getSysApiConfById(id: number, res: any) {
        try {
            connection.query('SELECT * FROM SYSAPICONF WHERE id = ?', [id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err

                    })
                } else {
                    res.status(200).send({
                        message: 'SYSAPICONF listado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }  
               
    }

    createSysApiConf(sysApiConf: SysApiConfType, res: any) {
        try {
            connection.query('INSERT INTO SYSAPICONF SET ?;', [sysApiConf], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SYSAPICONF criado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }  
               
    }

    editSysApiConf(id: number, sysApiConf: SysApiConfType, res: any) {
        try {
            connection.query('UPDATE SYSAPICONF SET ? WHERE id = ?', [sysApiConf, id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SYSAPICONF editado com sucesso',
                        data: results

                    })
                }
            })
        } catch (error) {
            console.error(error)
        }  
               

    }

    deleteSysApiConf(id: number, res: any) {
        try {
            connection.query('DELETE FROM SYSAPICONF WHERE id = ?', [id], (err: any, results: any) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    res.status(200).send({
                        message: 'SYSAPICONF deletado com sucesso',
                        data: results
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }  
               
    }
}

export default new ModeloSysApiConf();
