import express,{Request,Response} from 'express';
import statusChamadoModel from '../../db/Models/statusChamadoModel';

const router = express.Router();

router.get('/', (req:Request,res:Response) => {
    statusChamadoModel.getAll(res);
})

router.get('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    statusChamadoModel.getStatusChamadoById(id,res);
})

router.get('/status/:nome', (req:Request,res:Response) => {
    const nomeStatus = req.params.nome
    statusChamadoModel.getStatusChamadoByName(nomeStatus,res);
})

router.post('/', (req:Request,res:Response) => {
    const statusChamadoData = req.body;
    statusChamadoModel.createStatusChamado(statusChamadoData,res);
})

router.patch('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    const statusChamadoData = req.body;
    statusChamadoModel.updateStatusChamado(id,statusChamadoData,res);
})

router.delete('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    statusChamadoModel.deleteStatusChamado(id,res);
})

export default router;