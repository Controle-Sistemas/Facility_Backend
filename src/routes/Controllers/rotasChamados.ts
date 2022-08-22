import express,{Request,Response} from 'express';
import chamadosModel from '../../db/Models/chamadosModel';

const router = express.Router();

router.get('/', (req:Request,res:Response) => {
    chamadosModel.getAll(res);
})

router.get('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    chamadosModel.getChamadoById(id,res);
})

router.get('/setor/:setor', (req:Request,res:Response) => {
    const idSetor = Number(req.params.setor);
    chamadosModel.getChamadoBySector(idSetor,res);
})

router.get('/interno/:interno', (req:Request,res:Response) => {
    const idInterno = Number(req.params.interno);
    chamadosModel.getChamadoByInternalId(idInterno,res);
} )

router.get('/status/:status', (req:Request,res:Response) => {
    const idStatus = Number(req.params.status);
    chamadosModel.getChamadoByStatus(idStatus,res);
})

router.get('/user/:user', (req:Request,res:Response) => {
    const idUser = Number(req.params.user);
    chamadosModel.getChamadoByUserId(idUser,res);
})

router.post('/', (req:Request,res:Response) => {
    const chamadoData = req.body;
    chamadosModel.createChamado(chamadoData,res);
})

router.patch('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    const chamadoData = req.body;
    chamadosModel.updateChamado(id,chamadoData,res);
})

router.delete('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    chamadosModel.deleteChamado(id,res);
})

export default router;