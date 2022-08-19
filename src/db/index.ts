import mysql from 'mysql2'
// import dotenv from 'dotenv'
// dotenv.config()
let connection: mysql.Connection;

// if(process.env.ENVIRONMENT === 'PROD') {
//     console.log('PROD');
    connection = mysql.createConnection({
        host: "us-cdbr-east-06.cleardb.net",
        user: "b7d2057b60237e",
        password: "ad282879",
        database: "heroku_b720c4485f58516",
        connectTimeout: 60 * 60 * 1000,
    })
// } else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'controle*302109',
//         database: 'projeto-portal',
//         port: 3306
//     })
// }




export default connection //exportando a conexão o modulo da conexão