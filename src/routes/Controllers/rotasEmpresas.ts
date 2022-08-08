import EnterprisesModel from '../../Models/enterprisesModel';
import Express,{Request,Response} from 'express'; 
import Empresas from '../../requests/empresas'; //Pega os dados da api antiga


const routes = Express.Router(); 

routes.get('/', async (req: Request, res: Response) => {
    EnterprisesModel.getEnterprises(res); //Pega todas as empresas da base de dados
})

routes.get('/:idCloud', async (req: Request, res: Response) => { 
    const id = Number(req.params.idCloud); //Pega o id da empresa
    EnterprisesModel.getEnterprise(id, res); //Pega a empresa pelo id
})

routes.get('/cnpj/:cnpj', async (req: Request, res: Response) => {
    const cnpj = req.params.cnpj; //Pega o cnpj da empresa
    EnterprisesModel.getEnterpriseCnpj(cnpj, res); //Pega a empresa pelo cnpj
})

routes.post('/', (req: Request, res: Response) => {

    // Empresas.getAll().then(response => {
    //     response.Empresas.forEach((empresa:any) => {
            
    //         EnterprisesModel.createEnterprise(empresa, res)
    //     });
    // })
    const enterpriseData = req.body; //Pega os dados da empresa
    EnterprisesModel.createEnterprise(enterpriseData, res);   //Cria a empresa
})

routes.patch('/:idCloud', (req: Request, res: Response) => {
    const id = Number(req.params.idCloud); //Pega o id da empresa
    const enterpriseData = req.body; //Pega os dados da empresa
    EnterprisesModel.updateEnterprise(id, enterpriseData, res); //Atualiza a empresa
})

routes.delete('/:idCloud', (req: Request, res: Response) => {
    const id = Number(req.params.idCloud); //Pega o id da empresa
    EnterprisesModel.deleteEnterprise(id, res); //Deleta a empresa
})



export default routes;