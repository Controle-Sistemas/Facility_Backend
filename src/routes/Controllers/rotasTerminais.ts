
import TerminalModel from '../../Models/sysTerminals';
import conn from '../../db';

import express,{ Request, Response } from 'express';
import terminais from '../../requests/licencas'; //Pega os dados da api antiga
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => { 
    TerminalModel.getTerminals(req, res); //Pega todos os terminais da base de dados
})

routes.get('/:id', (req: Request, res: Response) => {
    const idCloud = Number(req.params.id); //Pega o id do terminal
    TerminalModel.getTerminal(idCloud, res); //Pega o terminal pelo id
})

routes.post('/', (req: Request, res: Response) => {
     const terminalData = req.body; //Pega os dados do terminal
    
    TerminalModel.createTerminal(terminalData, res); //Cria o terminal
    
})

routes.patch('/:id', (req: Request, res: Response) => {
    const idCloud = Number(req.params.id); //Pega o id do terminal
    const terminalData = req.body; //Pega os dados do terminal
    TerminalModel.updateTerminal(idCloud, terminalData, res); //Atualiza o terminal
})

routes.delete('/:id', (req: Request, res: Response) => {
    const idCloud = Number(req.params.id); //Pega o id do terminal
    TerminalModel.deleteTerminal(idCloud, res); //Deleta o terminal
})


export default routes;

