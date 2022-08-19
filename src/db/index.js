"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let connection;
if (process.env.ENVIRONMENT === 'PROD') {
    console.log('PROD');
    connection = mysql2_1.default.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectTimeout: 60 * 60 * 1000,
    });
}
else {
    connection = mysql2_1.default.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'controle*302109',
        database: 'projeto-portal',
        port: 3306
    });
}
exports.default = connection; //exportando a conexão o modulo da conexão
