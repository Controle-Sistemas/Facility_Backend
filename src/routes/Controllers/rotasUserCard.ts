import CardsModel from '../../Models/userCardModel';
import Express,{Request,Response} from 'express'; 

const routes = Express.Router();

routes.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    CardsModel.getUserCard(id,res); //Pega todas as cartões da base de dados
}
)

routes.get('/user/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    CardsModel.getUserCardByUser(id,res); //Pega todas as cartões da base de dados
})

routes.post('/', (req: Request, res: Response) => {
    const cardData = req.body;
    
    cardData.LINK = "/user/relatorios/"+cardData.INFO.split(' ')[0].toLowerCase();
    cardData.VALUE = 999

    console.log(cardData);

    CardsModel.addUserCard(cardData,res); //Cria a cartão
})

routes.patch('/:idUser/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const idUser = Number(req.params.idUser);
    const cardData = req.body;
    CardsModel.updateUserCard(cardData,idUser,id,res); //Atualiza a cartão
})

routes.delete('/:idUser/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const idUser = Number(req.params.idUser);
    CardsModel.deleteUserCard(idUser,id,res); //Deleta a cartão
})

export default routes;