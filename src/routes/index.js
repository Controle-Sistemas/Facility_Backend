"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const rotasClientes_1 = __importDefault(require("./Controllers/rotasClientes"));
const rotasConfApi_1 = __importDefault(require("./Controllers/rotasConfApi"));
const rotasMenu_1 = __importDefault(require("./Controllers/rotasMenu"));
const rotasRamos_1 = __importDefault(require("./Controllers/rotasRamos"));
const rotasEmpresas_1 = __importDefault(require("./Controllers/rotasEmpresas"));
const rotasTerminais_1 = __importDefault(require("./Controllers/rotasTerminais"));
const rotasUserTableCustom_1 = __importDefault(require("./Controllers/rotasUserTableCustom"));
const rotasUserCard_1 = __importDefault(require("./Controllers/rotasUserCard"));
const rotasDocumentos_1 = __importDefault(require("./Controllers/rotasDocumentos"));
const rotasTutoriais_1 = __importDefault(require("./Controllers/rotasTutoriais"));
const rotasCategoriasTutorial_1 = __importDefault(require("./Controllers/rotasCategoriasTutorial"));
const rotasEmails_1 = __importDefault(require("./Controllers/rotasEmails"));
routes.use('/tabelas', rotasUserTableCustom_1.default);
routes.use('/empresas', rotasEmpresas_1.default);
routes.use('/terminais', rotasTerminais_1.default);
routes.use('/clientes', rotasClientes_1.default);
routes.use('/api-config', rotasConfApi_1.default);
routes.use('/menu', rotasMenu_1.default);
routes.use('/ramos', rotasRamos_1.default);
routes.use('/card', rotasUserCard_1.default);
routes.use('/documentos', rotasDocumentos_1.default);
routes.use('/tutoriais', rotasTutoriais_1.default);
routes.use('/categorias', rotasCategoriasTutorial_1.default);
routes.use('/emails', rotasEmails_1.default);
routes.get('/', (req, res) => {
    res.send(`
        <h1>API Facility</h1>
        <ul>
            <li>
                <a href="/clientes">Clientes</a>
            </li>
            <li>
                <a href="/api-config">API Config</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/ramos">Ramos</a>
            </li>
            <li>
                <a href="/card">Card</a>
            </li>
            <li>
                <a href="/documentos">Documentos</a>
            </li>
            <li>
                <a href="/tutoriais">Tutoriais</a>
            </li>
            <li>
                <a href="/categorias">Categorias</a>
            </li>
            <li>
                <a href="/emails">Emails</a>
            </li>
        </ul>
        
    `);
});
exports.default = routes;
