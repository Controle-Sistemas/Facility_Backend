import express, { Request, Response } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';
import ejs from 'ejs';
import path from 'path';
import puppeteer from 'puppeteer';

const router = express.Router();

router.post('/',
    async (req: Request, res: Response) => {

    })

router.post('/:relatorioType', async (req: Request, res: Response) => {
    const data = req.body;
    const relatorioType = req.params.relatorioType;
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const date = new Date();
    const dateTime = `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`

    await page.setRequestInterception(true);
    page.on("request", interceptedRequest => {
        interceptedRequest.continue({
            method: "POST",
            postData: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
    });

    await page.goto(`http://localhost:8000/relatorios/pdf/${relatorioType}`, {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'A4',
        landscape: true,
        margin: {
            top: '20px',
            bottom: '40px',
            left: '40px',
            right: '40px'
        },
        footerTemplate: `
        <span style='font-size:'small'>Relatório gerado através do Portal Facility da Controle Sistemas</span>
        `
    })
    await browser.close()
    res.contentType("application/pdf")
    res.send(pdf)
})

router.post('/pdf/:relatorioType', (req: Request, res: Response) => {
    const registry = req.body
    const date = new Date();
    const infoDate = date.toLocaleDateString();
    const infoTime = date.toLocaleTimeString();
    const relatorioType = req.params.relatorioType
    const templatePath = path.join(__dirname, '../', '../', 'utils', 'pdf-templates', `${relatorioType}.ejs`);
   ejs.renderFile(templatePath, { registry, infoDate, infoTime }, (err, data) => {
        if (err) {
            res.send(`Erro ⚠️${'\n'} Template "${relatorioType}" não encontrado.`)
        } else {
            res.send(data)
        }
    })
})

export default router;



