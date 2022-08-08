import mysql from 'mysql2'

const config = { //objeto com as configurações do banco de dados
    host: 'apifacility.controleautomacao.com.br',
    port:3306,
    database:'controleautomaca_controle_facility',
    user: 'controleautomaca_controle_fac',
    password: 'daniel*302104'
}

// const config = { //objeto com as configurações do banco de dados
//     host: 'localhost',
//     port:3306,
//     database:'projeto-portal',
//     user: 'root',
//     password: 'controle*302109'
// }


const connection = mysql.createConnection(config) //fazendo a conexão com o banco

export default connection //exportando a conexão o modulo da conexão