import connection from '..';

class CreateTables {
	tableCliente() {
		//Cria a tabela de clientes caso não exista
		connection.query(
			`CREATE TABLE IF NOT EXISTS SYSLOGINREQUEST (
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
				)`,
			(err: any, results: any) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela SYSLOGINREQUEST criada com sucesso');
				}
			}
		);
	}

	tableSysApiConf() {
		//Cria a tabela de configurações da api externa caso não exista
		connection.query(
			'CREATE TABLE IF NOT EXISTS SYSAPICONF (id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,APISERVERADRESS VARCHAR(1000), APIDEFAULTUSER VARCHAR(100), APIDEFAULTPASSWORD VARCHAR(100), APIDEFAULTTOKEN VARCHAR(500), APIDEFAULTINSTANCE VARCHAR(100))',
			(err: any, results: any) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela SYSAPICONF criada com sucesso');
				}
			}
		);
	}

	tableSysMenuItem() {
		connection.query(
			`
			CREATE TABLE IF NOT EXISTS SYSMENUITEM(
				id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
				descricao VARCHAR(200) NOT NULL, 
				ativo BOOLEAN NOT NULL DEFAULT 0, 
				admin BOOLEAN NOT NULL DEFAULT 0, 
				idPai INTEGER, 
				iconNameFontAwesome TEXT, 
				RAMODEATIVIDADE TEXT, 
				link TEXT NOT NULL 
				)`,
			(err: any, results: any) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela SYSMENUITEM criada com sucesso');
				}
			}
		);
	}

	tableSysRamosAtividade() {
		connection.query(
			'CREATE TABLE IF NOT EXISTS SYSRAMOSATIVIDADE(descricao VARCHAR(200) NOT NULL PRIMARY KEY, ativo BOOLEAN NOT NULL DEFAULT 0)',
			(err: any, results: any) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela SYSRAMOSATIVIDADE criada com sucesso');
				}
			}
		);
	}

	tableEmpresas() {
		connection.query(
			`
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
        )`,
			(err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela EMPRESAS criada com sucesso');
				}
			}
		);
	}

	tableTerminais() {
		connection.query(
			`
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
            `,
			(err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela TERMINAIS criada com sucesso');
				}
			}
		);
	}

	tableSysSelectTableColumn() {
		connection.query(
			`
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


		`,
			(err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('Tabela SYSSELECTTABLECOLUMN criada com sucesso');
				}
			}
		);
	}

	tableUserCard() {
		connection.query(
			`
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
			} else {
				console.log('Tabela USERCARD criada com sucesso');
			}
		}
		);
	}

	tableDocumentos() {
		connection.query(`
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
			} else {
				console.log('Tabela DOCUMENTOS criada com sucesso');
			}
		})
	}

	tableTutoriais() {
		connection.query(`
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
			} else {
				console.log('Tabela TUTORIAIS criada com sucesso');
			}
		})
	}

	tableTutoriaisCategoria() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS TUTORIAISCATEGORIA (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela TUTORIAISCATEGORIA criada com sucesso');
			}
		})
	}

	tableSetores() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS SETORES (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela SETORES criada com sucesso');
			}
		})
	}

	tableInternos() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS INTERNOS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				USUARIO VARCHAR(200) NOT NULL,
				SENHA VARCHAR(200) NOT NULL,
				EMAIL VARCHAR(200) NOT NULL,
				SETOR INT NOT NULL,
				ATIVO BOOLEAN NOT NULL DEFAULT 1,
				FOREIGN KEY(SETOR) REFERENCES SETORES(ID)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela INTERNOS criada com sucesso');
			}
		}
		)
	}

	tableChamados() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS CHAMADOS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				IDINTERNO INT,
				IDCLIENTE INT NOT NULL,
				SETOR INT NOT NULL,
				TITULO VARCHAR(200) NOT NULL,
				DESCRICAO TEXT NOT NULL,
				STATUS INT NOT NULL DEFAULT 0,
				DATAINCLUSAO VARCHAR(20) NOT NULL,
				DATAVENCIMENTO VARCHAR(20) DEFAULT "",
				PRIORIDADE INT NOT NULL DEFAULT 1,
				PREVISAO VARCHAR(10) NOT NULL,
				ULTIMAATUALIZACAO VARCHAR(40),
				FILE TEXT,
				ATIVO BOOLEAN NOT NULL DEFAULT 1,
				INTERNORECEPTOR VARCHAR(100),
				VISTO BOOLEAN NOT NULL DEFAULT 0,
				RECORRENTE BOOLEAN NOT NULL DEFAULT 0,
				DATARECORRENCIA VARCHAR(30),
				TIPORECORRENCIA TINYINT(1) NOT NULL DEFAULT 0,
				FOREIGN KEY(SETOR) REFERENCES SETORES(ID),
				FOREIGN KEY(IDCLIENTE) REFERENCES SYSLOGINREQUEST(ID),
				FOREIGN KEY(IDINTERNO) REFERENCES INTERNOS(ID),

				FOREIGN KEY (STATUS) REFERENCES STATUSCHAMADOS(ID)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOS criada com sucesso');
			}
		}
		)
	}

	tableStatusChamados() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS STATUSCHAMADOS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				NOME VARCHAR(200) NOT NULL,
				DESCRICAO VARCHAR(200)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOSSTATUS criada com sucesso');
			}
		}
		)
	}

	tableOcorrencias() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS OCORRENCIAS (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				IDCHAMADO INT NOT NULL,
				IDINTERNO INT NOT NULL,
				SETOR INT NOT NULL,
				DESCRICAO TEXT NOT NULL,
				DATAINCLUSAO VARCHAR(20) NOT NULL,
				ATIVO BOOLEAN NOT NULL DEFAULT 1,
				STATUS INT NOT NULL DEFAULT 0,
				FOREIGN KEY(IDCHAMADO) REFERENCES CHAMADOS(ID) ON DELETE CASCADE,
				FOREIGN KEY(IDINTERNO) REFERENCES INTERNOS(ID),
				FOREIGN KEY(STATUS) REFERENCES STATUSCHAMADOS(ID),
				FOREIGN KEY(SETOR) REFERENCES SETORES(ID)
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela OCORRENCIAS criada com sucesso');
			}
		}
		)
	}

	tableMatrizes() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS MATRIZES (
				ID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
				IDCLOUDMATRIZ INTEGER NOT NULL,
				CNPJ VARCHAR(20) NOT NULL
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela MATRIZES criada com sucesso');
			}
		}
		)
	}

	tableFiliais() {
		connection.query(`
			CREATE TABLE IF NOT EXISTS FILIAIS (
				ID INTEGER AUTO_INCREMENT NOT NULL,
				IDMATRIZ INTEGER NOT NULL,
				IDCLOUD INTEGER NOT NULL,
				CNPJ VARCHAR(20) NOT NULL,
				PRIMARY KEY(ID),
				FOREIGN KEY(IDMATRIZ) REFERENCES MATRIZES(ID) ON DELETE CASCADE
				)
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela FILIAIS criada com sucesso');
			}
		}
		)
	}

	tableChamadosType() {
		connection.query(`
		CREATE TABLE CHAMADOTYPE(
			ID INT NOT NULL AUTO_INCREMENT,
			TITLE INT NOT NULL,
			PRIMARY KEY(ID)
		);
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOSTYPE criada com sucesso');
			}
		}
		)
	}

	tableChamadosTypeSection() {
		connection.query(`
		CREATE TABLE CHAMADOTYPESECTION(
			ID INT NOT NULL AUTO_INCREMENT,
			TITLE VARCHAR(20) NOT NULL,
			IDTYPE INT NOT NULL,
			PRIMARY KEY (ID)
		);
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOSTYPESECTION criada com sucesso');
			}
		}
		)
	}

	tableChamadosTypeSectionItem() {
		connection.query(`
		CREATE TABLE CHAMADOTYPESECTIONITEM(
			ID INT NOT NULL AUTO_INCREMENT,
			IDSECTION INT NOT NULL,
			DESCRIPTION VARCHAR(100) NOT NULL,
			REQUIRED INT NOT NULL,
			PRIMARY KEY(ID)
		);
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOSTYPESECTIONITEM criada com sucesso');
			}
		}
		)
	}

	tableChamadosSectionItem() {
		connection.query(`
		CREATE TABLE CHAMADOSECTIONITEM(
			ID INT NOT NULL AUTO_INCREMENT,
			IDSECTIONITEMTYPE INT NOT NULL,
			IDCHAMADO INT NOT NULL,
			REQUIRED BOOLEAN NOT NULL DEFAULT 0,
			DONE BOOLEAN NOT NULL DEFAULT 0,
			PRIMARY KEY (ID)
		);
		`, (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Tabela CHAMADOSSECTIONITEM criada com sucesso');
			}
		}
		)
	}

}

export default new CreateTables();

