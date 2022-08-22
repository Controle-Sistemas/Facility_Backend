import express,{Request,Response} from 'express';
import sectorsModel from '../../db/Models/sectorsModel';

const router = express.Router();

router.get('/', (req:Request,res:Response) => {
    sectorsModel.getSectors(res);
})

router.get('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    sectorsModel.getSectorById(id,res);
})

router.post('/', (req:Request,res:Response) => {
    const sectorData = req.body;
    sectorsModel.createSector(sectorData,res);
})

router.patch('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    const sectorData = req.body;
    sectorsModel.updateSector(id,sectorData,res);
})

router.delete('/:id', (req:Request,res:Response) => {
    const id = Number(req.params.id);
    sectorsModel.deleteSector(id,res);
})

export default router;
