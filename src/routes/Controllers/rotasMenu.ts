import express, { Request, Response } from 'express';
import connection from '../../db';
import MenuItemModel from '../../db/Models/sysMenuItem';
const routes = express.Router();

routes.get('/item', (req: Request, res: Response) => {
	MenuItemModel.getAllMenuItems(res);
});

routes.get('/item/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	MenuItemModel.getMenuItemById(id, res);
});

routes.get('/item/ramo/:ramoAtividade', (req: Request, res: Response) => {
	const ramoAtividade = req.params.ramoAtividade;

	MenuItemModel.getItemsByRamoDeAtividade(ramoAtividade, res);
});

routes.post('/item', (req: Request, res: Response) => {
	const menuItem = req.body;
	MenuItemModel.createMenuItem(menuItem, res);
});

routes.patch('/item/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const menuItem = req.body;
	MenuItemModel.updateMenuItem(id, menuItem, res);
});

routes.delete('/item/:id', (req: Request, res: Response) => {
	const id = Number(req.params.id);
	MenuItemModel.deleteMenuItem(id, res);
});

export default routes;
