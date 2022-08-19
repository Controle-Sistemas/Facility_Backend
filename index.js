"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./src/db"));
const createTables_1 = __importDefault(require("./src/db/Models/createTables"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const corsOptions = {
    origin: 'http://localhost:3000' || 'http://facility.controleautomacao.com.br',
    optionsSuccessStatus: 200
};
//Verificando se a conexão com o banco de dados está funcionando
db_1.default.connect((err) => {
    if (err) {
        console.log(err);
        console.log('Não foi possível conectar ao banco de dados');
    }
    else {
        console.log('Conectado com sucesso');
        app.use((0, cors_1.default)(corsOptions));
        app.use(body_parser_1.default.json()); //Para o express entender o formato json
        app.use(body_parser_1.default.urlencoded({ extended: true }));
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
        //utilizar as rotas
        app.use(routes_1.default);
        app.listen(PORT, () => {
            console.log('Server running on port 8000');
        });
    }
});
