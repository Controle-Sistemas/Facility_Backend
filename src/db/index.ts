import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
let connection: mysql.Connection;

if(process.env.ENVIRONMENT === 'PROD') {
    console.log('PROD');
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectTimeout: 60 * 60 * 1000,
    })
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'controle*302109',
        database: 'projeto-portal',
        port: 3306
    })
}




export default connection //exportando a conexão o modulo da conexão