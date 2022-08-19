"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
class CreateTables {
    tableCliente() {
        //Cria a tabela de clientes caso não exista
        __1.default.query(`CREATE TABLE IF NOT EXISTS SYSLOGINREQUEST (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(100) NOT NULL,
				NOMEESTABELECIMENTO VARCHAR(200) NOT NULL,
				EMAIL VARCHAR(100) NOT NULL, 
				CNPJ VARCHAR(20) NOT NULL,
				IDCLOUD INTEGER NOT NULL, 
				RAMODEATIVIDADE TEXT NOT NULL, 
				STATUS INTEGER(1) NOT NULL DEFAULT 0,
				PASSWORD VARCHAR(60) NOT NULL, 
				REASONBLOCKING TEXT, 
				ADMIN INTEGER(1) NOT NULL DEFAULT 0,
				ISVISIBLE INTEGER(1) NOT NULL DEFAULT 1, 
				isRepresentative INTEGER(1) NOT NULL DEFAULT 0, 
				REPRESENTANTE VARCHAR(100),
				HASHTOKEN VARCHAR(500) NOT NULL
				)`, (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSLOGINREQUEST criada com sucesso');
            }
        });
    }
    tableSysApiConf() {
        //Cria a tabela de configurações da api externa caso não exista
        __1.default.query('CREATE TABLE IF NOT EXISTS SYSAPICONF (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,APISERVERADRESS VARCHAR(1000), APIDEFAULTUSER VARCHAR(100), APIDEFAULTPASSWORD VARCHAR(100), APIDEFAULTTOKEN VARCHAR(500), APIDEFAULTINSTANCE VARCHAR(100))', (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSAPICONF criada com sucesso');
            }
        });
    }
    tableSysMenuItem() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS SYSMENUITEM(
				id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
				descricao VARCHAR(200) NOT NULL, 
				ativo BOOLEAN NOT NULL DEFAULT 0, 
				admin BOOLEAN NOT NULL DEFAULT 0, 
				idPai INTEGER, 
				iconNameFontAwesome TEXT, 
				RAMODEATIVIDADE TEXT, 
				link TEXT NOT NULL 
				)`, (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSMENUITEM criada com sucesso');
            }
        });
    }
    tableSysRamosAtividade() {
        __1.default.query('CREATE TABLE IF NOT EXISTS SYSRAMOSATIVIDADE(descricao VARCHAR(200) NOT NULL PRIMARY KEY, ativo BOOLEAN NOT NULL DEFAULT 0)', (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSRAMOSATIVIDADE criada com sucesso');
            }
        });
    }
    tableEmpresas() {
        __1.default.query(`
        CREATE TABLE IF NOT EXISTS EMPRESAS(
            ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
            IDCLOUD INTEGER NOT NULL,
            IDCIDADE INTEGER,
            IDREPRESENTANTE INTEGER,

            NOMEFANTASIA VARCHAR(200) NOT NULL,
            NOMECONTATO VARCHAR(200) NOT NULL,
            RAZAOSOCIAL VARCHAR(200) NOT NULL,
            CNPJ VARCHAR(20) NOT NULL,
            CNAE VARCHAR(20),
            INSCRICAOESTADUAL VARCHAR(20),
            EMAIL VARCHAR(100) NOT NULL,
            RAMOATIVIDADE TEXT,
            REPRESENTANTE VARCHAR(100),


            NOVO VARCHAR(1) NOT NULL DEFAULT 'N',
            STATUS INTEGER(1) NOT NULL DEFAULT 0,
            ATIVO VARCHAR(1),

            CEP VARCHAR(10),
            BAIRRO VARCHAR(200),
            CIDADE VARCHAR(200),
            COMPLEMENTO VARCHAR(200),
            NUMERO INTEGER,
            ENDERECO VARCHAR(200) NOT NULL,
            UF VARCHAR(2),
            DATAVIGENCIA VARCHAR(20),
            CADASTRADAPOR VARCHAR(100),
            OBSERVACOES TEXT,

            FONECOBRANCA VARCHAR(20),
            FONEADICIONAL VARCHAR(20),

            DATAINICIO VARCHAR(20) NOT NULL,
            DIASLICENCAPROVISORIA INTEGER NOT NULL DEFAULT 0,
            VALORMENSALIDADE VARCHAR(20),
            VALORIMPLANTACAO VARCHAR(20)
        )`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela EMPRESAS criada com sucesso');
            }
        });
    }
    tableTerminais() {
        __1.default.query(`
        CREATE TABLE IF NOT EXISTS TERMINAIS(
            Id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
            CodigoEmpresa INTEGER NOT NULL,
            DataInclusao VARCHAR(20) NOT NULL,
            DataLicencaProvisoria VARCHAR(20),
            DataSolicitacaoProvisoria VARCHAR(20),
            DataVigencia VARCHAR(20),
            DiasLicencaProvisoria INTEGER NOT NULL DEFAULT 0,
            IdCloudTerminal INTEGER NOT NULL,
            IdEmpresa INTEGER NOT NULL,
            Identificacao VARCHAR(200) NOT NULL,
            KeyTerminal VARCHAR(200) NOT NULL,
            Licenca VARCHAR(200) NOT NULL,
            LicencaProvisoria VARCHAR(200) ,
            NomeMaquina VARCHAR(200) NOT NULL,
            Provisoria VARCHAR(1) NOT NULL DEFAULT 'N',
            Restricao VARCHAR(1) NOT NULL DEFAULT 'N'
            )
            `, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TERMINAIS criada com sucesso');
            }
        });
    }
    tableSysSelectTableColumn() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS SYSSELECTTABLECOLUMN (
				id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				idUser INTEGER NOT NULL,
				idTable INTEGER NOT NULL,
				fieldName VARCHAR(200) NOT NULL,
				fieldIndex VARCHAR(200),
				fieldCaption VARCHAR(200),
				visible BOOLEAN NOT NULL DEFAULT 1,
				defaultIndex BOOLEAN NOT NULL DEFAULT '0',
				FOREIGN KEY(idUser) REFERENCES SYSLOGINREQUEST(id)


				)


		`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSSELECTTABLECOLUMN criada com sucesso');
            }
        });
    }
    tableUserCard() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS USERCARD (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				IDUSER INTEGER NOT NULL,
				TITLE VARCHAR(200) NOT NULL,
				INFO VARCHAR(40) NOT NULL,
				VALUE VARCHAR(100) NOT NULL,
				TIPOCARD INT(1) NOT NULL DEFAULT 0,
				TIPOVALOR INT(1) NOT NULL DEFAULT '0',
				ICON VARCHAR(200),
				SUBTEXTO VARCHAR(100),
				LINK VARCHAR(45) NOT NULL,
				FOREIGN KEY(IDUSER) REFERENCES SYSLOGINREQUEST(ID)


				)
		`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela USERCARD criada com sucesso');
            }
        });
    }
    tableDocumentos() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS DOCUMENTOS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				TIPO INT NOT NULL,
				IDUSER INT NOT NULL,
				CNPJ VARCHAR(20) NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200),
				FILE VARCHAR(500),
				EXIBIRATEVENCIMENTO BOOLEAN NOT NULL DEFAULT 0,
				DATAINCLUSAO VARCHAR(20) NOT NULL,
				DATAVENCIMENTO VARCHAR(20) NOT NULL,
				PRIORIDADE INT NOT NULL DEFAULT 1,
				ATIVO BOOLEAN NOT NULL DEFAULT 1,
				STATUS INT NOT NULL DEFAULT 0,
				VISTO BOOLEAN NOT NULL DEFAULT 0,
				COMUNICADO VARCHAR(300),
				FOREIGN KEY(IDUSER) REFERENCES SYSLOGINREQUEST(ID)
				)
		`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela DOCUMENTOS criada com sucesso');
            }
        });
    }
    tableTutoriais() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS TUTORIAIS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				CATEGORIA VARCHAR(200) NOT NULL,
				TITULO VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200),
				FILE VARCHAR(200),
				DATAINCLUSAO VARCHAR(20) NOT NULL,
				ATIVO BOOLEAN NOT NULL DEFAULT 1,
				TIPO INT NOT NULL,
				TEXTO VARCHAR(5000),
				LINK VARCHAR(200)
				)
		`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TUTORIAIS criada com sucesso');
            }
        });
    }
    tableTutoriaisCategoria() {
        __1.default.query(`
			CREATE TABLE IF NOT EXISTS TUTORIAISCATEGORIA (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200)
				)
		`, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TUTORIAISCATEGORIA criada com sucesso');
            }
        });
    }
}
exports.default = new CreateTables();
