import express from 'express';
import routes from './src/routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './src/db';
import CreateTables from './src/db/Models/createTables';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const corsOptions = {
	origin: `${process.env.FRONT_DEPLOY_URL}` || 'http://localhost:3000',
	optionsSuccessStatus: 200,
};

//Verificando se a conexão com o banco de dados está funcionando
connection.connect((err: any) => {
	if (err) {
		console.log(err);
		console.log('Não foi possível conectar ao banco de dados');
	} else {
		console.log('Conectado com sucesso');

		app.use(cors());
		app.use(cors(corsOptions));
		// app.use(bodyParser.json()); //Para o express entender o formato json
		// app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json({ limit: '200mb' }));
		app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));
		app.use(bodyParser.text({ limit: '200mb' }));

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
		CreateTables.tableTutoriaisCategoria();
		CreateTables.tableSetores();
		CreateTables.tableInternos();
		CreateTables.tableChamadosType();
		CreateTables.tableChamadosTypeSection();
		CreateTables.tableChamados();
		CreateTables.tableChamadosTypeSectionItem();
		CreateTables.tableChamadosSectionItem();
		CreateTables.tableOcorrencias();
		CreateTables.tableStatusChamados();
		CreateTables.tableMatrizes();
		CreateTables.tableFiliais();
		//utilizar as rotas
		app.use(routes);
		app.listen(PORT, () => {
			console.log('Server running on port ' + PORT);
		});
	}
});

