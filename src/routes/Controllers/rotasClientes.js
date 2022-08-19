"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const db_1 = __importDefault(require("../../db"));
const systemloginrequest_1 = __importDefault(require("../../db/Models/systemloginrequest"));
const sysUserTableCustom_1 = __importDefault(require("../../db/Models/sysUserTableCustom"));
const sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
const routes = express_1.default.Router();
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../../config/auth"));
routes.get('/admin', (req, res) => {
    systemloginrequest_1.default.getClients(res);
});
routes.get('/campos', (req, res) => {
    systemloginrequest_1.default.getFields(res);
});
routes.get('/usuario/:cnpj', (req, res) => {
    const cnpj = Number(req.params.cnpj);
    systemloginrequest_1.default.getClientByCNPJ(cnpj, res);
});
routes.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    systemloginrequest_1.default.getClientById(id, res);
});
//Rota para cadastrar um novo usuário
routes.post('/', 
// Algumas verificações de validação
(0, express_validator_1.body)('EMAIL').isEmail().normalizeEmail(), (0, express_validator_1.body)('CNPJ').not().isEmpty().trim().escape(), (0, express_validator_1.body)('NOME').not().isEmpty().trim().escape(), (0, express_validator_1.body)('NOMEESTABELECIMENTO').not().isEmpty().trim().escape(), (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req); //Pega todos os erros de validação
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); //Retorna os erros de validação
    }
    const client = req.body; //Pega os dados do usuário
    const cnpj = client.CNPJ.replace('&#x2F;', '/').replace(/\D/g, '');
    client.CNPJ = cnpj;
    db_1.default.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = '${cnpj}'`, async (err, results) => {
        //Verifica se existe algum usuário com o mesmo cnpj
        try {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    //Se existir, retorna um erro
                    res.status(400).json({
                        message: `Ja existe um pedido de conta com esse CNPJ pendente. \n Caso não tenha solicitado ou esteja demorando, entre em contato com nosso suporte`
                    });
                }
                else {
                    let password = Math.random().toString(36).substring(2, 8); //Gera uma senha aleatória
                    const passwordEncrypted = bcrypt_1.default.hash(password, 5); //Criptografa a senha
                    await passwordEncrypted
                        .then((result) => {
                        client.PASSWORD = result; //Adiciona a senha criptografada ao usuário
                    })
                        .catch((err) => {
                        console.log(err);
                    });
                    let HASHTOKEN = bcrypt_1.default.hash((client.CNPJ + client.IDCLOUD), 8); //Gera um hash para o token
                    await HASHTOKEN
                        .then((result) => {
                        client.HASHTOKEN = result; //Adiciona o hash ao usuário
                    })
                        .catch((err) => {
                        console.log(err);
                    });
                    if (res.statusCode !== 200) {
                        res.status(400).json({ message: `Erro ao criar o cliente` });
                    }
                    else {
                        try {
                            systemloginrequest_1.default.createClient(client, res); //Cria o usuário
                            const SendEmailService = new sendEmailService_1.default(client);
                            SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
                            db_1.default.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = '${cnpj}'`, async (err, results) => {
                                //Verifica se existe algum usuário com o mesmo cnpj
                                try {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        if (results.length > 0) {
                                            const tableData = {
                                                idTable: [1, 2],
                                                idUser: results[0].ID
                                            };
                                            const fieldNamesTable2 = `IDCLOUD,ID,IDCIDADE,IDREPRESENTANTE,NOMEFANTASIA,NOMECONTATO,RAZAOSOCIAL,CNPJ,CNAE,INSCRICAOESTADUAL,EMAIL,RAMOATIVIDADE,REPRESENTANTE,NOVO,STATUS,ATIVO,CEP,BAIRRO,CIDADE,COMPLEMENTO,NUMERO,ENDERECO,UF,DATAVIGENCIA,CADASTRADAPOR,OBSERVACOES,FONECOBRANCA,FONEADICIONAL,DATAINICIO,DIASLICENCAPROVISORIA,VALORMENSALIDADE,VALORIMPLANTACAO,AÇÕES`.split(',');
                                            const fieldNamesTable1 = `ID,NOME,NOMEESTABELECIMENTO,EMAIL,CNPJ,IDCLOUD,RAMODEATIVIDADE,STATUS,ADMIN,AÇÕES`.split(',');
                                            for (let i = 0; i < tableData.idTable.length; i++) {
                                                if (tableData.idTable[i] == 1) {
                                                    fieldNamesTable1.forEach((field) => {
                                                        let newData = {
                                                            idUser: tableData.idUser,
                                                            idTable: tableData.idTable[i],
                                                            fieldName: field,
                                                            fieldCaption: field,
                                                            visible: 1
                                                        };
                                                        sysUserTableCustom_1.default.createTable(newData, res); //Cria a tabela na base de dados
                                                    });
                                                }
                                                else if (tableData.idTable[i] == 2) {
                                                    fieldNamesTable2.forEach((field) => {
                                                        let newData = {
                                                            idUser: tableData.idUser,
                                                            idTable: tableData.idTable[i],
                                                            fieldName: field,
                                                            fieldCaption: field,
                                                            visible: field === 'AÇÕES' || "IDCLOUD" || "RAZAOSOCIAL" || "NOMEFANTASIA" || "CNPJ" || "NOMECONTATO" || "CEP" ? 1 : 0
                                                        };
                                                        sysUserTableCustom_1.default.createTable(newData, res); //Cria a tabela na base de dados
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                                catch (err) {
                                    console.log(err);
                                }
                            });
                            res.status(200).json({ message: `Cliente criado com sucesso` });
                        }
                        catch (err) {
                            console.log(err);
                            res.status(400).json({ message: `Erro ao criar o cliente` });
                        }
                    }
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
//Rota para Login de um usuário
routes.post('/login', (req, res) => {
    const { CNPJ, PASSWORD } = req.body; //Pega os dados do usuário
    db_1.default.query(`SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = '${CNPJ}'`, async (err, results) => {
        //Verifica se existe algum usuário com o mesmo cnpj
        try {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    //Se existir, verifica a senha
                    const passwordEncrypted = results[0].PASSWORD;
                    await bcrypt_1.default.compare(PASSWORD, passwordEncrypted).then((result) => {
                        //Compara a senha criptografada com a senha digitada
                        if (result) {
                            let token = jsonwebtoken_1.default.sign({
                                //Cria o token
                                id: results[0].id,
                                cnpj: results[0].cnpj,
                            }, auth_1.default.secret, {
                                expiresIn: auth_1.default.expireIn
                            });
                            /*
                                Status
                                0 - Aguardando aprovação
                                1 - Aprovado
                                2 - Reprovado
                                
                                isAdmin
                                0 - Não é admin
                                1 - É admin
                            */
                            if (result && results[0].STATUS === 1 && results[0].ADMIN === 0) {
                                res.status(200).json({ message: `Cliente logado com sucesso`, token, isAdmin: false }); //Retorna o token e se o usuário é admin
                            }
                            else if (result && results[0].STATUS === 1 && results[0].ADMIN === 1) {
                                res.status(200).json({
                                    message: `Cliente logado com sucesso`,
                                    token,
                                    isAdmin: true,
                                    id: results[0].ID
                                }); //Retorna o token e se o usuário é admin
                            }
                            else if (result && results[0].STATUS === 0) {
                                res.status(400).json({
                                    message: `Sua conta está sendo analisada, para mais informações contate o nosso suporte (45) 99934-3293`
                                }); //Retorna uma menagem de erro
                            }
                        }
                        else {
                            res.status(400).json({ message: `Senha incorreta` }); //Retorna uma mensagem de erro
                        }
                    });
                }
                else {
                    res.status(400).json({ message: `CNPJ não cadastrado` });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
//Rota para atualizar um usuário
routes.patch('/logout', (req, res) => {
    return { token: null }; //Retorna um token nulo
});
routes.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const client = req.body;
    systemloginrequest_1.default.updateClient(id, client, res);
});
routes.patch('/change-password/:cnpj', (req, res) => {
    const CNPJ = req.params.cnpj; //Pega o cnpj do usuário
    const oldPassword = req.body.oldPassword; //Pega a senha antiga
    const newPassword = req.body.newPassword; //Pega a nova senha
    db_1.default.query(`SELECT * FROM sysloginrequest WHERE CNPJ = ${CNPJ}`, async (err, results) => {
        try {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) { //Verifica se existe algum usuário com o mesmo cnpj
                    const oldPasswordEncrypted = results[0].PASSWORD; //Pega a senha criptografada
                    await bcrypt_1.default.compare(oldPassword, oldPasswordEncrypted).then((result) => {
                        if (result) { //Se for igual, criptografa a nova senha e atualiza o usuário
                            const passwordEncrypted = bcrypt_1.default.hash(newPassword, 5);
                            passwordEncrypted
                                .then((result) => {
                                if (result) {
                                    const data = {
                                        PASSWORD: result
                                    };
                                    db_1.default.query(`UPDATE sysloginrequest SET ? WHERE CNPJ = ${CNPJ}`, [data], (err, results) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            res.status(200).json({ message: `Senha atualizada com sucesso` });
                                        }
                                    });
                                }
                                else {
                                    res.status(400).json({ message: `Erro ao atualizar a senha` });
                                }
                            })
                                .catch((err) => {
                                console.log(err);
                            });
                        }
                        else {
                            console.log(result);
                            res.status(400).json({ message: `Senha atual incorreta` });
                        }
                    });
                }
                else {
                    res.status(400).json({ message: `Usuário não encontrado` });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
routes.patch('/forgot-password/:cnpj', (req, res) => {
    const cnpj = req.params.cnpj;
    db_1.default.query(`SELECT * FROM sysloginrequest WHERE CNPJ = ${cnpj}`, async (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            if (results.length > 0) {
                let password = Math.random().toString(36).substring(2, 8); //Gera uma senha aleatória
                const passwordEncrypted = bcrypt_1.default.hash(password, 5); //Criptografa a senha
                passwordEncrypted
                    .then((result) => {
                    if (result) {
                        const data = {
                            PASSWORD: result
                        };
                        db_1.default.query(`UPDATE sysloginrequest SET ? WHERE CNPJ = ${cnpj}`, [data], (err) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                const SendEmailService = new sendEmailService_1.default(results[0]);
                                SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
                                res
                                    .status(200)
                                    .json({
                                    message: `Um email com a nova senha foi enviado para ${results[0].EMAIL}`
                                });
                            }
                        });
                    }
                    else {
                        res.status(400).json({ message: `Erro ao atualizar a senha` });
                    }
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
            else {
                res.status(400).json({ message: `Usuário não encontrado` });
            }
        }
    });
});
routes.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    db_1.default.query(`SELECT * FROM sysselecttablecolumn WHERE idUser = ${id}`, (err, results) => {
        try {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    db_1.default.query(`DELETE FROM sysselecttablecolumn WHERE idUser = ${id}`, (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (result) {
                                systemloginrequest_1.default.deleteClient(id, res);
                            }
                        }
                    });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
exports.default = routes;
