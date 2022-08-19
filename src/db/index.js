"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
// import dotenv from 'dotenv'
// dotenv.config()
let connection;
// if(process.env.ENVIRONMENT === 'PROD') {
//     console.log('PROD');
connection = mysql2_1.default.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b7d2057b60237e",
    password: "ad282879",
    database: "heroku_b720c4485f58516",
    connectTimeout: 60 * 60 * 1000,
});
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'controle*302109',
//         database: 'projeto-portal',
//         port: 3306
//     })
// }
exports.default = connection; //exportando a conexão o modulo da conexão
