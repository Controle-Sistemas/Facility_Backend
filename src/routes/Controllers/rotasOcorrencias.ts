import express,{Request,Response} from 'express';
import occurrencesModel from '../../db/Models/occurrencesModel';
const router = express.Router();


router.get('/', (req:Request,res:Response) => {
    occurrencesModel.getAll(res);
})

router.get('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    occurrencesModel.getOccurrenceById(id,res);
})

router.get('/sector/:sector', (req:Request,res:Response) => {
    const idSector = Number(req.params.sector);
    occurrencesModel.getOccurrenceBySector(idSector,res);
})

router.get('/chamado/:chamado', (req:Request,res:Response) => {
    const idChamado = Number(req.params.chamado);
    occurrencesModel.getOccurrenceByChamado(idChamado,res);
})

router.get('/interno/:interno', (req:Request,res:Response) => {
    const idInterno = Number(req.params.interno);
    occurrencesModel.getOccurrenceByInterno(idInterno,res);
})

router.post('/', (req:Request,res:Response) => {
    const occurrenceData = req.body;
    occurrencesModel.createOccurrence(occurrenceData,res);
})

router.patch('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    const occurrenceData = req.body;
    occurrencesModel.updateOccurrence(id,occurrenceData,res);
})

router.delete('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    occurrencesModel.deleteOccurrence(id,res);
})

export default router;