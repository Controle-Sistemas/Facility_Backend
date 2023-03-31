"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var CreateTables = /** @class */ (function () {
    function CreateTables() {
    }
    CreateTables.prototype.tableCliente = function () {
        //Cria a tabela de clientes caso não exista
        __1.default.query("CREATE TABLE IF NOT EXISTS SYSLOGINREQUEST (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tNOME VARCHAR(100) NOT NULL,\n\t\t\t\tNOMEESTABELECIMENTO VARCHAR(200) NOT NULL,\n\t\t\t\tEMAIL VARCHAR(100) NOT NULL, \n\t\t\t\tCNPJ VARCHAR(20) NOT NULL,\n\t\t\t\tIDCLOUD INTEGER NOT NULL, \n\t\t\t\tRAMODEATIVIDADE TEXT NOT NULL, \n\t\t\t\tSTATUS INTEGER(1) NOT NULL DEFAULT 0,\n\t\t\t\tPASSWORD VARCHAR(60) NOT NULL, \n\t\t\t\tREASONBLOCKING TEXT, \n\t\t\t\tADMIN INTEGER(1) NOT NULL DEFAULT 0,\n\t\t\t\tISVISIBLE INTEGER(1) NOT NULL DEFAULT 1, \n\t\t\t\tisRepresentative INTEGER(1) NOT NULL DEFAULT 0, \n\t\t\t\tREPRESENTANTE VARCHAR(100),\n\t\t\t\tHASHTOKEN VARCHAR(500) NOT NULL\n\t\t\t\t)", function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSLOGINREQUEST criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableSysApiConf = function () {
        //Cria a tabela de configurações da api externa caso não exista
        __1.default.query('CREATE TABLE IF NOT EXISTS SYSAPICONF (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,APISERVERADRESS VARCHAR(1000), APIDEFAULTUSER VARCHAR(100), APIDEFAULTPASSWORD VARCHAR(100), APIDEFAULTTOKEN VARCHAR(500), APIDEFAULTINSTANCE VARCHAR(100))', function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSAPICONF criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableSysMenuItem = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS SYSMENUITEM(\n\t\t\t\tid INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, \n\t\t\t\tdescricao VARCHAR(200) NOT NULL, \n\t\t\t\tativo BOOLEAN NOT NULL DEFAULT 0, \n\t\t\t\tadmin BOOLEAN NOT NULL DEFAULT 0, \n\t\t\t\tidPai INTEGER, \n\t\t\t\ticonNameFontAwesome TEXT, \n\t\t\t\tRAMODEATIVIDADE TEXT, \n\t\t\t\tlink TEXT NOT NULL \n\t\t\t\t)", function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSMENUITEM criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableSysRamosAtividade = function () {
        __1.default.query('CREATE TABLE IF NOT EXISTS SYSRAMOSATIVIDADE(descricao VARCHAR(200) NOT NULL PRIMARY KEY, ativo BOOLEAN NOT NULL DEFAULT 0)', function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSRAMOSATIVIDADE criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableEmpresas = function () {
        __1.default.query("\n        CREATE TABLE IF NOT EXISTS EMPRESAS(\n            ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n            IDCLOUD INTEGER NOT NULL,\n            IDCIDADE INTEGER,\n            IDREPRESENTANTE INTEGER,\n\n            NOMEFANTASIA VARCHAR(200) NOT NULL,\n            NOMECONTATO VARCHAR(200) NOT NULL,\n            RAZAOSOCIAL VARCHAR(200) NOT NULL,\n            CNPJ VARCHAR(20) NOT NULL,\n            CNAE VARCHAR(20),\n            INSCRICAOESTADUAL VARCHAR(20),\n            EMAIL VARCHAR(100) NOT NULL,\n            RAMOATIVIDADE TEXT,\n            REPRESENTANTE VARCHAR(100),\n\n\n            NOVO VARCHAR(1) NOT NULL DEFAULT 'N',\n            STATUS INTEGER(1) NOT NULL DEFAULT 0,\n            ATIVO VARCHAR(1),\n\n            CEP VARCHAR(10),\n            BAIRRO VARCHAR(200),\n            CIDADE VARCHAR(200),\n            COMPLEMENTO VARCHAR(200),\n            NUMERO INTEGER,\n            ENDERECO VARCHAR(200) NOT NULL,\n            UF VARCHAR(2),\n            DATAVIGENCIA VARCHAR(20),\n            CADASTRADAPOR VARCHAR(100),\n            OBSERVACOES TEXT,\n\n            FONECOBRANCA VARCHAR(20),\n            FONEADICIONAL VARCHAR(20),\n\n            DATAINICIO VARCHAR(20) NOT NULL,\n            DIASLICENCAPROVISORIA INTEGER NOT NULL DEFAULT 0,\n            VALORMENSALIDADE VARCHAR(20),\n            VALORIMPLANTACAO VARCHAR(20)\n        )", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela EMPRESAS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableTerminais = function () {
        __1.default.query("\n        CREATE TABLE IF NOT EXISTS TERMINAIS(\n            Id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n            CodigoEmpresa INTEGER NOT NULL,\n            DataInclusao VARCHAR(20) NOT NULL,\n            DataLicencaProvisoria VARCHAR(20),\n            DataSolicitacaoProvisoria VARCHAR(20),\n            DataVigencia VARCHAR(20),\n            DiasLicencaProvisoria INTEGER NOT NULL DEFAULT 0,\n            IdCloudTerminal INTEGER NOT NULL,\n            IdEmpresa INTEGER NOT NULL,\n            Identificacao VARCHAR(200) NOT NULL,\n            KeyTerminal VARCHAR(200) NOT NULL,\n            Licenca VARCHAR(200) NOT NULL,\n            LicencaProvisoria VARCHAR(200) ,\n            NomeMaquina VARCHAR(200) NOT NULL,\n            Provisoria VARCHAR(1) NOT NULL DEFAULT 'N',\n            Restricao VARCHAR(1) NOT NULL DEFAULT 'N'\n            )\n            ", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TERMINAIS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableSysSelectTableColumn = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS SYSSELECTTABLECOLUMN (\n\t\t\t\tid INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tidUser INTEGER NOT NULL,\n\t\t\t\tidTable INTEGER NOT NULL,\n\t\t\t\tfieldName VARCHAR(200) NOT NULL,\n\t\t\t\tfieldIndex VARCHAR(200),\n\t\t\t\tfieldCaption VARCHAR(200),\n\t\t\t\tvisible BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tdefaultIndex BOOLEAN NOT NULL DEFAULT '0',\n\t\t\t\tFOREIGN KEY(idUser) REFERENCES SYSLOGINREQUEST(id)\n\n\n\t\t\t\t)\n\n\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SYSSELECTTABLECOLUMN criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableUserCard = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS USERCARD (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tIDUSER INTEGER NOT NULL,\n\t\t\t\tTITLE VARCHAR(200) NOT NULL,\n\t\t\t\tINFO VARCHAR(40) NOT NULL,\n\t\t\t\tVALUE VARCHAR(100) NOT NULL,\n\t\t\t\tTIPOCARD INT(1) NOT NULL DEFAULT 0,\n\t\t\t\tTIPOVALOR INT(1) NOT NULL DEFAULT '0',\n\t\t\t\tICON VARCHAR(200),\n\t\t\t\tSUBTEXTO VARCHAR(100),\n\t\t\t\tLINK VARCHAR(45) NOT NULL,\n\t\t\t\tFOREIGN KEY(IDUSER) REFERENCES SYSLOGINREQUEST(ID)\n\n\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela USERCARD criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableDocumentos = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS DOCUMENTOS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tTIPO INT NOT NULL,\n\t\t\t\tIDUSER INT NOT NULL,\n\t\t\t\tCNPJ VARCHAR(20) NOT NULL,\n\t\t\t\tNOME VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO VARCHAR(200),\n\t\t\t\tFILE VARCHAR(500),\n\t\t\t\tEXIBIRATEVENCIMENTO BOOLEAN NOT NULL DEFAULT 0,\n\t\t\t\tDATAINCLUSAO VARCHAR(20) NOT NULL,\n\t\t\t\tDATAVENCIMENTO VARCHAR(20) NOT NULL,\n\t\t\t\tPRIORIDADE INT NOT NULL DEFAULT 1,\n\t\t\t\tATIVO BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tSTATUS INT NOT NULL DEFAULT 0,\n\t\t\t\tVISTO BOOLEAN NOT NULL DEFAULT 0,\n\t\t\t\tCOMUNICADO VARCHAR(300),\n\t\t\t\tFOREIGN KEY(IDUSER) REFERENCES SYSLOGINREQUEST(ID)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela DOCUMENTOS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableTutoriais = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS TUTORIAIS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tCATEGORIA VARCHAR(200) NOT NULL,\n\t\t\t\tTITULO VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO VARCHAR(200),\n\t\t\t\tFILE VARCHAR(200),\n\t\t\t\tDATAINCLUSAO VARCHAR(20) NOT NULL,\n\t\t\t\tATIVO BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tTIPO INT NOT NULL,\n\t\t\t\tTEXTO VARCHAR(5000),\n\t\t\t\tLINK VARCHAR(200)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TUTORIAIS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableTutoriaisCategoria = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS TUTORIAISCATEGORIA (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tNOME VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO VARCHAR(200)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela TUTORIAISCATEGORIA criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableSetores = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS SETORES (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tNOME VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO VARCHAR(200)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela SETORES criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableInternos = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS INTERNOS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tNOME VARCHAR(200) NOT NULL,\n\t\t\t\tUSUARIO VARCHAR(200) NOT NULL,\n\t\t\t\tSENHA VARCHAR(200) NOT NULL,\n\t\t\t\tEMAIL VARCHAR(200) NOT NULL,\n\t\t\t\tSETOR INT NOT NULL,\n\t\t\t\tATIVO BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tADMIN BOOLEAN NOT NULL DEFAULT 0,\n\t\t\t\tFOREIGN KEY(SETOR) REFERENCES SETORES(ID)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela INTERNOS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableChamados = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS CHAMADOS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tIDINTERNO INT,\n\t\t\t\tIDCLIENTE INT NOT NULL,\n\t\t\t\tSETOR INT NOT NULL,\n\t\t\t\tTITULO VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO TEXT NOT NULL,\n\t\t\t\tSTATUS INT NOT NULL DEFAULT 0,\n\t\t\t\tDATAINCLUSAO VARCHAR(20) NOT NULL,\n\t\t\t\tDATAVENCIMENTO VARCHAR(20) DEFAULT \"\",\n\t\t\t\tPRIORIDADE INT NOT NULL DEFAULT 1,\n\t\t\t\tPREVISAO VARCHAR(10) NOT NULL,\n\t\t\t\tULTIMAATUALIZACAO VARCHAR(40),\n\t\t\t\tFILE TEXT,\n\t\t\t\tATIVO BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tINTERNORECEPTOR VARCHAR(100),\n\t\t\t\tVISTO BOOLEAN NOT NULL DEFAULT 0,\n\t\t\t\tRECORRENTE BOOLEAN NOT NULL DEFAULT 0,\n\t\t\t\tDATARECORRENCIA VARCHAR(30),\n\t\t\t\tTIPORECORRENCIA TINYINT(1) NOT NULL DEFAULT 0,\n\t\t\t\tTIPOCHAMADO VARCHAR(36) NOT NULL,\n\t\t\t\tFOREIGN KEY(SETOR) REFERENCES SETORES(ID),\n\t\t\t\tFOREIGN KEY(IDCLIENTE) REFERENCES SYSLOGINREQUEST(ID),\n\t\t\t\tFOREIGN KEY(IDINTERNO) REFERENCES INTERNOS(ID),\n\t\t\t\tFOREIGN KEY(TIPOCHAMADO) REFERENCES CHAMADOTYPE(ID),\n\t\t\t\tFOREIGN KEY (STATUS) REFERENCES STATUSCHAMADOS(ID)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableStatusChamados = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS STATUSCHAMADOS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tNOME VARCHAR(200) NOT NULL,\n\t\t\t\tDESCRICAO VARCHAR(200)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOSSTATUS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableOcorrencias = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS OCORRENCIAS (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tIDCHAMADO INT NOT NULL,\n\t\t\t\tIDINTERNO INT NOT NULL,\n\t\t\t\tSETOR INT NOT NULL,\n\t\t\t\tDESCRICAO TEXT NOT NULL,\n\t\t\t\tDATAINCLUSAO VARCHAR(20) NOT NULL,\n\t\t\t\tATIVO BOOLEAN NOT NULL DEFAULT 1,\n\t\t\t\tSTATUS INT NOT NULL DEFAULT 0,\n\t\t\t\tFOREIGN KEY(IDCHAMADO) REFERENCES CHAMADOS(ID) ON DELETE CASCADE,\n\t\t\t\tFOREIGN KEY(STATUS) REFERENCES STATUSCHAMADOS(ID),\n\t\t\t\tFOREIGN KEY(SETOR) REFERENCES SETORES(ID)\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela OCORRENCIAS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableMatrizes = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS MATRIZES (\n\t\t\t\tID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,\n\t\t\t\tIDCLOUDMATRIZ INTEGER NOT NULL,\n\t\t\t\tCNPJ VARCHAR(20) NOT NULL\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela MATRIZES criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableFiliais = function () {
        __1.default.query("\n\t\t\tCREATE TABLE IF NOT EXISTS FILIAIS (\n\t\t\t\tID INTEGER AUTO_INCREMENT NOT NULL,\n\t\t\t\tIDMATRIZ INTEGER NOT NULL,\n\t\t\t\tIDCLOUD INTEGER NOT NULL,\n\t\t\t\tCNPJ VARCHAR(20) NOT NULL,\n\t\t\t\tPRIMARY KEY(ID),\n\t\t\t\tFOREIGN KEY(IDMATRIZ) REFERENCES MATRIZES(ID) ON DELETE CASCADE\n\t\t\t\t)\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela FILIAIS criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableChamadosType = function () {
        __1.default.query("\n\t\tCREATE TABLE IF NOT EXISTS CHAMADOTYPE(\n\t\t\tID VARCHAR(36) NOT NULL,\n\t\t\tTITLE VARCHAR(25) NOT NULL,\n\t\t\tPRIMARY KEY(ID)\n\t\t);\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOTYPE criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableChamadosTypeSection = function () {
        __1.default.query("\n\t\tCREATE TABLE IF NOT EXISTS CHAMADOTYPESECTION(\n\t\t\tID VARCHAR(36) NOT NULL,\n\t\t\tTITLE VARCHAR(25) NOT NULL,\n\t\t\tIDTYPE VARCHAR(36) NOT NULL,\n\t\t\tPRIMARY KEY (ID),\n\t\t\tFOREIGN KEY(IDTYPE) REFERENCES CHAMADOTYPE(ID) ON DELETE CASCADE\n\t\t);\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOTYPESECTION criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableChamadosTypeSectionItem = function () {
        __1.default.query("\n\t\tCREATE TABLE IF NOT EXISTS CHAMADOTYPESECTIONITEM(\n\t\t\tID VARCHAR(36) NOT NULL,\n\t\t\tIDSECTION VARCHAR(36) NOT NULL,\n\t\t\tDESCRIPTION VARCHAR(100) NOT NULL,\n\t\t\tREQUIRED BOOLEAN NOT NULL,\n\t\t\tPRIMARY KEY(ID),\n\t\t\tFOREIGN KEY(IDSECTION) REFERENCES CHAMADOTYPESECTION(ID) ON DELETE CASCADE\n\t\t);\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOTYPESECTIONITEM criada com sucesso');
            }
        });
    };
    CreateTables.prototype.tableChamadosSectionItem = function () {
        __1.default.query("\n\t\tCREATE TABLE IF NOT EXISTS CHAMADOSECTIONITEM(\n\t\t\tID INT NOT NULL AUTO_INCREMENT,\n\t\t\tIDSECTIONITEMTYPE VARCHAR(36) NOT NULL,\n\t\t\tIDCHAMADO INT NOT NULL,\n\t\t\tREQUIRED BOOLEAN NOT NULL,\n\t\t\tDONE BOOLEAN NOT NULL DEFAULT 0,\n\t\t\tPRIMARY KEY (ID),\n\t\t\tCONSTRAINT FK_TYPE FOREIGN KEY(IDSECTIONITEMTYPE) REFERENCES CHAMADOTYPESECTIONITEM(ID) ON DELETE CASCADE,\n\t\t\tCONSTRAINT FK_CHAMADO FOREIGN KEY(IDCHAMADO) REFERENCES CHAMADOS(ID) ON DELETE CASCADE\n\t\t);\n\t\t", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Tabela CHAMADOSECTIONITEM criada com sucesso');
            }
        });
    };
    return CreateTables;
}());
exports.default = new CreateTables();
//# sourceMappingURL=createTables.js.map