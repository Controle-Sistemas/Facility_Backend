import express from 'express';
import routes from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './db';
import CreateTables from './Models/createTables';

const app = express();

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
};

//Verificando se a conexão com o banco de dados está funcionando
connection.connect((err: any) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Conectado com sucesso');

		app.use(cors(corsOptions));
		app.use(bodyParser.json()); //Para o express entender o formato json

		app.use(bodyParser.urlencoded({ extended: true }));


		//Criando as tabelas do banco de dados
		CreateTables.tableCliente();
		CreateTables.tableSysApiConf();
		CreateTables.tableSysMenuItem();
		CreateTables.tableSysRamosAtividade();
		CreateTables.tableEmpresas();
		CreateTables.tableTerminais();
		CreateTables.tableSysSelectTableColumn();
		CreateTables.tableUserCard();
		CreateTables.tableDocumentos();
		CreateTables.tableTutoriais();
		CreateTables.tableTutoriaisCategoria()
		//utilizar as rotas
		app.use(routes);
		app.listen(8000, () => {
			console.log('Server running on port 8000');
		});
	}
});
