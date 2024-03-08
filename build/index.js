"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./src/routes"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var db_1 = __importDefault(require("./src/db"));
var createTables_1 = __importDefault(require("./src/db/Models/createTables"));
require('dotenv').config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8000;
// const corsOptions = {
// 	origin: 'http://localhost:3000' || 'http://facility.controleautomacao.com.br',
// 	optionsSuccessStatus: 200,
// };
//Verificando se a conexão com o banco de dados está funcionando
db_1.default.connect(function (err) {
    if (err) {
        console.log(err);
        console.log('Não foi possível conectar ao banco de dados');
    }
    else {
        console.log('Conectado com sucesso');
        app.use((0, cors_1.default)());
        // app.use(bodyParser.json()); //Para o express entender o formato json
        // app.use(bodyParser.urlencoded({ extended: true }));
        app.use(body_parser_1.default.json({ limit: '200mb' }));
        app.use(body_parser_1.default.urlencoded({ limit: '200mb', extended: true }));
        app.use(body_parser_1.default.text({ limit: '200mb' }));
        //Criando as tabelas do banco de dados
        createTables_1.default.tableCliente();
        createTables_1.default.tableSysApiConf();
        createTables_1.default.tableSysMenuItem();
        createTables_1.default.tableSysRamosAtividade();
        createTables_1.default.tableEmpresas();
        createTables_1.default.tableTerminais();
        createTables_1.default.tableSysSelectTableColumn();
        createTables_1.default.tableUserCard();
        createTables_1.default.tableDocumentos();
        createTables_1.default.tableTutoriais();
        createTables_1.default.tableTutoriaisCategoria();
        createTables_1.default.tableSetores();
        createTables_1.default.tableInternos();
        createTables_1.default.tableChamadosType();
        createTables_1.default.tableChamadosTypeSection();
        createTables_1.default.tableChamados();
        createTables_1.default.tableChamadosTypeSectionItem();
        createTables_1.default.tableChamadosSectionItem();
        createTables_1.default.tableOcorrencias();
        createTables_1.default.tableStatusChamados();
        createTables_1.default.tableMatrizes();
        createTables_1.default.tableFiliais();
        //utilizar as rotas
        app.use(routes_1.default);
        app.listen(PORT, function () {
            console.log('Server running on port ' + PORT);
        });
    }
});
//# sourceMappingURL=index.js.map