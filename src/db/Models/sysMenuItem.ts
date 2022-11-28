import conn from '..';
import circularJson from 'circular-json';
import { SysMenuItemType } from '../../types';

class MenuItemModel {
	//Classe que conterá os métodos de acesso ao banco de dados

	getAllMenuItems(res: any) {
		//Retorna todos os itens do menu
		try {
			conn.query('SELECT * FROM SYSMENUITEM ORDER BY descricao', (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Itens do menu retornados com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getItemsByRamoDeAtividade(ramoAtividade: string, res: any) {
		//Retorna todos os itens do menu de acordo com o ramo de atividade
		try {
			conn.query(`SELECT * FROM SYSMENUITEM`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					const ramoAtividadeArray = ramoAtividade.split(','); //Separa o ramo de atividade em um array
					if (results) {
						if (ramoAtividade === 'Todos') {
							res.status(200).send({
								message: 'Itens do menu retornados com sucesso',
								data: results
							});
						} else {
							const filteredResults = results.filter((item: any) => {
								//Filtra os itens do menu pelo ramo de atividade
								if (item.idPai) {
									//Se o item possuir um idPai
									return ramoAtividadeArray.some((ramo: string) => {
										// Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
										return ramoAtividadeArray.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
									});
								} else {
									//Se o item não possuir um idPai
									if (item.RAMODEATIVIDADE) {
										if (item.RAMODEATIVIDADE.includes(`Todos`)) {
											return ramoAtividadeArray.some((ramo: string) => {
												return ramoAtividadeArray.includes(ramo);
											});
										} else {
											//Se o item possuir um ramo de atividade
											const ramosDeAtividade = item.RAMODEATIVIDADE.split(','); //Separa o ramo de atividade do item em um array
											return ramosDeAtividade.some((ramo: string) => {
												//Verifica se o ramo de atividade do item é igual ao ramo de atividade do usuário
												return ramoAtividadeArray.includes(ramo); //Se o ramo de atividade do item for igual ao ramo de atividade do usuário, retorna true
											});
										}
									}
								}
							});
							if (filteredResults.length > 0) {
								res.status(200).send({
									data: filteredResults
								});
							} else {
								res.status(200).send({
									message: 'Nenhum item encontrado'
								});
							}
						}
					}
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	getMenuItemById(id: number, res: any) {
		//Retorna um item do menu pelo id
		try {
			conn.query(`SELECT * FROM SYSMENUITEM WHERE id = ${id}`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					if (results.length > 0) {
						res.status(200).send({
							message: 'Item do menu retornado com sucesso',
							data: results[0]
						});
					} else {
						res.status(404).send({
							message: 'Item do menu não encontrado'
						});
					}
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	createMenuItem(menuItem: SysMenuItemType, res: any) {
		//Cria um item para o menu
		try {
			conn.query('INSERT INTO SYSMENUITEM SET ?', [ menuItem ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Menu item criado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	updateMenuItem(id: number, menuItem: SysMenuItemType, res: any) {
		//Atualiza um item do menu
		try {
			conn.query(`UPDATE SYSMENUITEM SET ? WHERE id = ${id}`, [ menuItem ], (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Menu item atualizado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}

	deleteMenuItem(id: number, res: any) {
		//Deleta um item do menu
		try {
			conn.query(`DELETE FROM SYSMENUITEM WHERE id = ${id}`, (err: any, results: any) => {
				if (err) {
					res.status(500).send({
						message: err
					});
				} else {
					res.status(200).send({
						message: 'Menu item deletado com sucesso',
						data: results
					});
				}
			});
		} catch (error) {
			console.error(error);
		}
	}
}

export default new MenuItemModel();
