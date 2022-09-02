import express, { Request, Response } from 'express';
import chamadosModel from '../../db/Models/chamadosModel';
import multer from 'multer';
import conn from '../../db';
import multerConfig from '../../config/multer';
import cron from 'node-cron';
import SendEmailService from '../../services/sendEmailService';
import UploadImageService from '../../services/uploadImageService'

const upload = multer(multerConfig);

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	chamadosModel.getAll(res);
});

router.get('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	chamadosModel.getChamadoById(id, res);
});

router.get('/setor/:setor', (req: Request, res: Response) => {
	const idSetor = Number(req.params.setor);
	chamadosModel.getChamadoBySector(idSetor, res);
});

router.get('/interno/:interno', (req: Request, res: Response) => {
	const idInterno = Number(req.params.interno);
	chamadosModel.getChamadoByInternalId(idInterno, res);
});

router.get('/interno/usuario/:usuario', (req: Request, res: Response) => {
	const internoUsername = req.params.usuario;
	chamadosModel.getChamadoByInternalUsername(internoUsername, res);
});

router.get('/status/:status', (req: Request, res: Response) => {
	const idStatus = Number(req.params.status);
	chamadosModel.getChamadoByStatus(idStatus, res);
});
cron.schedule(' 15 09 * * *', async () => {
	const date = new Date()
	const diaAtual = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate().toString()
	console.log(diaAtual)
	async function getChamados() {
		return await conn
			.promise()
			.query(`SELECT * FROM CHAMADOS WHERE RECORRENTE = 1 AND DATARECORRENCIA = '${diaAtual}'`)
			.then((response: any) => {
				return response[0];
			})
			.catch((err) => {
				return err;
			});
	}

	async function getInternos() {
		return await conn
			.promise()
			.query(`SELECT * FROM INTERNOS `)
			.then((response: any) => {
				return response[0];
			})
			.catch((err) => {
				return err;
			});
	}

	const chamados = await getChamados();
	const internos = await getInternos();
    const aux = chamados.map((chamado:any) => {   
        return internos.filter((interno:any) => chamado.INTERNORECEPTOR === interno.USUARIO)
    })
    internos.forEach((interno:any) => {
    
        if(aux.find((item:any) => item[0].ID === interno.ID)){
            console.log(interno)
            let sendEmailChamado = new SendEmailService(2,interno)
            sendEmailChamado.sendEmailChamadosRecorrentes(chamados.filter((chamado:any) => chamado.INTERNORECEPTOR === interno.USUARIO))
        }
    })


});

router.get('/user/:user', (req: Request, res: Response) => {
	const idUser = Number(req.params.user);
	chamadosModel.getChamadoByUserId(idUser, res);
});

router.post('/', upload.array('FILE', 10), async(req: Request, res: Response) => {
	const chamadoData = req.body;

	const files = req.files as Express.Multer.File[];
	const uploadImageService = new UploadImageService()
    await uploadImageService.execute(files,'chamados').then(result =>{
		if (files) {
			files.forEach((file) => {
				chamadoData.FILE += file.filename + ';';
			});
		}
		console.log(chamadoData);
		conn.query(`SELECT * FROM INTERNOS WHERE USUARIO = '${chamadoData.INTERNORECEPTOR}'`, (err, results: any) => {
			if (err) {
				console.log(err);
			} else {
				const emailService = new SendEmailService(2, results[0]);
				emailService.sendEmailChamado(chamadoData);
			}
		});
	
		conn.query(`SELECT * FROM SYSLOGINREQUEST WHERE NOME = '${chamadoData.CLIENTE}' `, (err, result: any) => {
			if (err) {
				console.log(err);
			} else {
				chamadoData.IDCLIENTE = result[0].ID;
				delete chamadoData.CLIENTE;
				chamadosModel.createChamado(chamadoData, res);
			}
		});
	}).then(err => {
		console.log(err)
        res.status(400).json({
            message:"Erro ao adicionar imagem na AmazonS3"
        })
	})

	console.log(typeof files);
	
});

router.patch('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const chamadoData = req.body;
	chamadosModel.updateChamado(id, chamadoData, res);
});

router.delete('/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	chamadosModel.deleteChamado(id, res);
});

export default router;
