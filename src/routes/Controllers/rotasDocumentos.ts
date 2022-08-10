import DocumentsModel from '../../Models/documentsModel';
import express,{ Request, Response } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';
import  conn  from '../../db';
import sendEmailService from '../../services/sendEmailService';
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
 (req: Request, res: Response) => {
    const document = req.body
    const files = req.files as Express.Multer.File[];
    


    console.log(typeof files)
    if (files) {
        files.forEach(file => {
            document.FILE += file.filename + ';'
        })
        delete document.file
    }
    console.log(document)
    if(document.ENVIAREMAIL === "1"){
        conn.query(`SELECT * FROM sysloginrequest WHERE CNPJ = '${document.CNPJ}'`, (err, result) => {
            if(err){
                console.log(err)
            }else{
                if(result){
                    console.log(result)
                    const SendEmailService = new sendEmailService(result);
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
})

router.patch('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const document = req.body;
    DocumentsModel.updateDocument(id, document, res);
})

router.delete('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    DocumentsModel.deleteDocument(id, res);
})

export default router;



