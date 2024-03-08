"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
var connection;
// connection = mysql.createConnection({
// 	host: 'us-cdbr-east-06.cleardb.net',
// 	user: 'b7d2057b60237e',
// 	password: 'ad282879',
// 	database: 'heroku_b720c4485f58516',
// 	connectTimeout: 60 * 60 * 1000,
// });
connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dbprojetoportal",
    port: 3306
});
exports.default = connection; //exportando a conexão o modulo da conexão
//# sourceMappingURL=index.js.map