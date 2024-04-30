import mysql from 'mysql2';
let connection: mysql.Connection;

// connection = mysql.createConnection({
// 	host: 'us-cdbr-east-06.cleardb.net',
// 	user: 'b7d2057b60237e',
// 	password: 'ad282879',
// 	database: 'heroku_b720c4485f58516',
// 	connectTimeout: 60 * 60 * 1000,
// });


connection = mysql.createConnection({
	host: "sistema.vpscronos0367.mysql.dbaas.com.br",
	user:"sistema",
	password:"Controleautomaca@2024",
	database:"sistema" ,
	port: 3306
})

export default connection; //exportando a conexão o modulo da conexão

