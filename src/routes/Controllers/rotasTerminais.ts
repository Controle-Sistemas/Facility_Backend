
import TerminalModel from '../../db/Models/sysTerminals';
import conn from '../../db';

import express, { Request, Response } from 'express';
import terminais from '../requests/licencas'; //Pega os dados da api antiga
const routes = express.Router()


// routes.get('/:id', (req: Request, res: Response) => {
//     const idCloud = Number(req.params.id); //Pega o id do terminal
//     TerminalModel.getTerminal(idCloud, res); //Pega o terminal pelo id
// })

routes.get('/:idCloud', (req: Request, res: Response) => {
    const idCloud = Number(req.params.idCloud);
    var dataPromise = TerminalModel.getTerminalsByIdCloud(idCloud);
    Promise.resolve(dataPromise).then(response => {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            })
        } else {
            return res.status(200).json({ message: `Terminais encontrados`, data: response })
        }

    })
});

routes.post('/license', (req: Request, res: Response) => {
    const data = req.body;
    var dataPromise = TerminalModel.refreshLicense(data);
    Promise.resolve(dataPromise).then(response => {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            })
        } else {
            return res.status(200).json({ message: `Terminais encontrados`, data: response })
        }

    })

})
// routes.get('/', (req: Request, res: Response) => { 
//     TerminalModel.getTerminals(req, res); //Pega todos os terminais da base de dados
// })

// routes.get('/:id', (req: Request, res: Response) => {
//     const idCloud = Number(req.params.id); //Pega o id do terminal
//     TerminalModel.getTerminal(idCloud, res); //Pega o terminal pelo id
// })



// routes.patch('/:id', (req: Request, res: Response) => {
//     const idCloud = Number(req.params.id); //Pega o id do terminal
//     const terminalData = req.body; //Pega os dados do terminal
//     TerminalModel.updateTerminal(idCloud, terminalData, res); //Atualiza o terminal
// })

// routes.delete('/:id', (req: Request, res: Response) => {
//     const idCloud = Number(req.params.id); //Pega o id do terminal
//     TerminalModel.deleteTerminal(idCloud, res); //Deleta o terminal
// })


export default routes;

