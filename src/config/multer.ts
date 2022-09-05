import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export default {
    dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'), //Diretório de destino dos arquivos
    storage: multer.diskStorage({ //Configuração do armazenamento dos arquivos
        destination: (req, file, cb) => { //Diretório de destino dos arquivos
            cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
        },
        filename: (req, file:any, cb) => { //Nome do arquivo
            crypto.randomBytes(16, (err, hash) => {
                if (err){
                    cb(err, '')
                } 

                file.key = `${hash.toString('hex')}-${file.originalname}` //Nome do arquivo com o hash
                console.log(file.key)

                cb(null, file.key)
            })
        }
    }),
   

} 