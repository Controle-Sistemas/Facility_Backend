import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

let connection: mysql.Connection;

// connection = mysql.createConnection({
// 	host: 'us-cdbr-east-06.cleardb.net',
// 	user: 'b7d2057b60237e',
// 	password: 'ad282879',
// 	database: 'heroku_b720c4485f58516',
// 	connectTimeout: 60 * 60 * 1000,
// });


connection = mysql.createConnection({
	host:process.env.DB_HOST,
	user:process.env.DB_USER,
	password:process.env.DB_PASSWORD,
	database:process.env.DB_DATABASE,
	port:parseInt(`${process.env.DB_PORT}`),
})
// connection = mysql.createConnection({
// 	host: "sistema.vpscronos0367.mysql.dbaas.com.br",
// 	user:"sistema",
// 	password:"Controleautomaca@2024",
// 	database:"sistema" ,
// 	port: 3306
// })

export default connection; //exportando a conexão o modulo da conexão

