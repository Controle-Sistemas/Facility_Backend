import express from 'express';
import routes from './src/routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './src/db';
import CreateTables from './src/db/Models/createTables';


const app = express();
const PORT = process.env.PORT || 3000;
// const corsOptions = {
// 	origin: 'http://localhost:3000' || 'http://facility.controleautomacao.com.br',
// 	optionsSuccessStatus: 200,

// };

//Verificando se a conexão com o banco de dados está funcionando
connection.connect((err: any) => {
	if (err) {
		console.log(err);
		console.log('Não foi possível conectar ao banco de dados');
	} else {
		console.log('Conectado com sucesso');

		app.use(cors({
			origin: 'http://localhost:3000' || 'http://facility.controleautomacao.com.br',
			optionsSuccessStatus: 200,
			
		}));
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
		app.listen(PORT, () => {
			console.log('Server running on port '+PORT);
		});
	}
});

