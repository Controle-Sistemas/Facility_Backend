import TuturialModel from '../../Models/tutorialModel'
import express,{ Request, Response } from 'express'
import conn from '../../db'
import multer from 'multer';
import multerConfig from '../../config/multer';
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

router.post('/',  upload.array('files', 10), (req: Request, res: Response) => {
    const tutorial = req.body
    const files = req.files as Express.Multer.File[];
    


    console.log(typeof files)
    if (files) {
        files.forEach(file => {
            tutorial.FILE += file.filename + ';'
        })
        delete tutorial.file
    }
    console.log(tutorial)
    TuturialModel.createTutorial(tutorial, res)
})

router.patch('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const tutorial = req.body
    TuturialModel.updateTutorial(id, tutorial, res)
})

router.delete('/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    TuturialModel.deleteTutorial(id, res)
})

export default router