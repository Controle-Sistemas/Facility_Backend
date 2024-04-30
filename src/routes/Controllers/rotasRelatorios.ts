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
    let relatorioType = req.params.relatorioType
    let templatePath = path.join(__dirname, '../', '../', 'utils', 'pdf-templates', `${relatorioType}.ejs`);
    ejs.renderFile(templatePath, getParamsByRelatoryType(req.body, relatorioType), (err, data) => {
        if (err) {
            console.log(err.message)
            res.send(`Erro ⚠️${'\n'} ${err.name}: ${err.message}`)
        } else {
            res.send(data)
        }
    })
})

function getParamsByRelatoryType(data: any, relatorioType: string) {
    switch (relatorioType) {
        case 'lucratividadeProdutos':
            let groups: any[] = [{
                nome: '01-BEBIDAS', products: [{
                    "produto": "1564-COCA COLA LATA",
                    "qtdeVendida": 2,
                    "valorTotal": 10.00,
                    "precoMedio": 5.00,
                    "lucroMedio": 2.5,
                    "custoMedio": 2.5,
                    "lucroTotal": 5.00,
                    "lucroMedioPerc": 50.00,
                    "lucroTotalPerc": 50.00,
                    "custoTotal": 2.5,
                },
                {
                    "produto": "1565-FANTA",
                    "qtdeVendida": 2,
                    "valorTotal": 10.00,
                    "precoMedio": 5.00,
                    "lucroMedio": 2.5,
                    "custoMedio": 2.5,
                    "lucroTotal": 5.00,
                    "lucroMedioPerc": 50.00,
                    "lucroTotalPerc": 50.00,
                    "custoTotal": 2.5
                },
                {
                    "produto": "1565-FANTA",
                    "qtdeVendida": 2,
                    "valorTotal": 10.00,
                    "precoMedio": 5.00,
                    "lucroMedio": 2.5,
                    "custoMedio": 2.5,
                    "lucroTotal": 5.00,
                    "lucroMedioPerc": 50.00,
                    "lucroTotalPerc": 50.00,
                    "custoTotal": 2.5
                },
                {
                    "produto": "1565-FANTA",
                    "qtdeVendida": 2,
                    "valorTotal": 10.00,
                    "precoMedio": 5.00,
                    "lucroMedio": 2.5,
                    "custoMedio": 2.5,
                    "lucroTotal": 5.00,
                    "lucroMedioPerc": 50.00,
                    "lucroTotalPerc": 50.00,
                    "custoTotal": 2.5
                },]
            }];
            let dateInit = data.dateInit;
            let dateFinal = data.dateFinal;
            let timeInit = data.timeInit;
            let timeFinal = data.timeFinal;
            let empresa = data.empresa;
            let qtdeTotal;
            let vlTotal;
            let cTotal;
            let lTotal;
            let percentualTotal;
            return { groups, dateInit, dateFinal, qtdeTotal, empresa, vlTotal, cTotal, lTotal, percentualTotal, timeInit, timeFinal }
            break;
        case 'pedidoEstoque':
            let registry = data
            let date = new Date();
            let infoDate = date.toLocaleDateString();
            let infoTime = date.toLocaleTimeString();
            return { registry, infoDate, infoTime }
            break;

        default:
            return {}
            break;
    }
}

export default router;



