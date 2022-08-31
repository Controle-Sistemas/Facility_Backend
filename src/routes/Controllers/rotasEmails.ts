import express from 'express';
const routes = express.Router();
import SendEmailService from '../../services/sendEmailService';


routes.post('/duvida', (req,res) => {
    const duvida = req.body;
    const sendEmailService = new SendEmailService(0);
    sendEmailService.sendEmailDuvida(duvida);
    res.status(200).send();
});

export default routes;