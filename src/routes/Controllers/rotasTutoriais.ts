import TuturialModel from '../../db/Models/tutorialModel'
import express, { Request, Response } from 'express'
import conn from '../../db'
import multer from 'multer';
import multerConfig from '../../config/multer';
import UploadImageService from '../../services/uploadImageService'
import DeleteImageService from '../../services/deleteImageService';

const upload = multer(multerConfig);


const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    TuturialModel.getTutorials(res)
})

router.get('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    TuturialModel.getTutorialById(id, res)
})

router.get('/categoria/:categoria', (req: Request, res: Response) => {
    const categoria = Number(req.params.categoria)
    TuturialModel.getTutorialByCategoria(categoria, res)
})

router.post('/', upload.array('files', 10), async (req: Request, res: Response) => {
    const tutorial = req.body
    const files = req.files as Express.Multer.File[];
    const uploadImageService = new UploadImageService()
    await uploadImageService.execute(files, 'tutoriais').then(result => {
        if (files) {
            files.forEach(file => {
                tutorial.FILE !== undefined ? tutorial.FILE += file.filename.replace(/ /g, '+') + ';' : tutorial.FILE = file.filename.replace(/ /g, '+') + ';'
                console.log(file.filename)
            })
            delete tutorial.file
        }
        TuturialModel.createTutorial(tutorial, res)
    }).catch(err => {
        console.log(err)
        res.status(400).json({
            message: "Erro ao adicionar imagem na AmazonS3"
        })
    })




})

router.patch('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const tutorial = req.body
    TuturialModel.updateTutorial(id, tutorial, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const deleteImageService = new DeleteImageService()
    conn.query(`SELECT * FROM tutoriais WHERE ID = ${id}`, async (err, results: any) => {
        if (err) {
            console.log(err)
        } else {
            if (results.length > 0) {
                if (results[0].TIPO !== 2) {
                    TuturialModel.deleteTutorial(id, res);
                } else if (results[0].TIPO === 2) {
                    const files = results[0].FILE.split(';')
                    console.log(files)
                    await deleteImageService.execute(files, "tutoriais").then(result => {
                        console.log(result)
                        TuturialModel.deleteTutorial(id, res);
                    }).catch(err => {
                        console.log(err)
                        res.status(400).json({
                            message: "Erro ao deletar a imagem na AmazonS3"
                        })
                    })
                }
            }


        }
    })
})

export default router