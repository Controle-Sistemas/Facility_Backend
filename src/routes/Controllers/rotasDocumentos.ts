import DocumentsModel from '../../db/Models/documentsModel';
import express,{ Request, Response } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';
import  conn  from '../../db';
import sendEmailService from '../../services/sendEmailService';
import UploadImageService from '../../services/uploadImageService'
import DeleteImageService from '../../services/deleteImageService'

const upload = multer(multerConfig);


const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    DocumentsModel.getAllDocuments(res);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    DocumentsModel.getDocumentById(id, res);
})

router.get('/cnpj/:cnpj', (req: Request, res: Response) => {
    const cnpj = req.params.cnpj;
    DocumentsModel.getDocumentByUserCNPJ(cnpj, res);
})

router.get('/user/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    DocumentsModel.getDocumentByUserId(id, res);
})

router.post('/',
    upload.array('files', 10),
 async(req: Request, res: Response) => {
    const document = req.body
    const files = req.files as Express.Multer.File[];
    const uploadImageService = new UploadImageService()
    await uploadImageService.execute(files,'documentos').then(result =>{
        if (files) {
            files.forEach(file => {
                document.FILE !== undefined ? document.FILE += file.filename.replace(/ /g,'+') + ';' : document.FILE = file.filename.replace(/ /g,'+')+ ';'
                console.log(file.filename)
            })
            delete document.file
        }
        console.log(document)
        if(document.ENVIAREMAIL === "1"){
            conn.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = '${document.CNPJ}'`, (err, result:any) => {
                if(err){
                    console.log(err)
                }else{
                    if(result){
                        console.log(result)
                        const SendEmailService = new sendEmailService(1,result[0]);
                        SendEmailService.sendDocumentEmail(document);
                        console.log('Email enviado com sucesso')
                    } else {
                        console.log('Usuário não encontrado')
                    }
                }
            })
        delete document.ENVIAREMAIL
    
        } else {
            delete document.ENVIAREMAIL
        }
        DocumentsModel.addDocument(document, res);
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            message:"Erro ao adicionar imagem na AmazonS3"
        })
    })
    


    
})

router.patch('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const document = req.body;
    DocumentsModel.updateDocument(id, document, res);
})

router.delete('/:id', async(req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleteImageService = new DeleteImageService()
    conn.query(`SELECT * FROM DOCUMENTOS WHERE ID = ${id}`,async (err, results: any) => {
        if(err){
            console.log(err)
        } else {

            const files = results[0].FILE.split(';')
            console.log(files)
            await deleteImageService.execute(files,"documentos").then(result => {
                DocumentsModel.deleteDocument(id, res);

            }).catch( err => {
                console.log(err)
                res.status(400).json({
                    message:"Erro ao deletar a imagem na AmazonS3"
                })
            })
        }
    })
})

export default router;



