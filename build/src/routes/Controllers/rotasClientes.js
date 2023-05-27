"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var db_1 = __importDefault(require("../../db"));
var systemloginrequest_1 = __importDefault(require("../../db/Models/systemloginrequest"));
var sysUserTableCustom_1 = __importDefault(require("../../db/Models/sysUserTableCustom"));
var sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
var routes = express_1.default.Router();
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var auth_1 = __importDefault(require("../../config/auth"));
routes.get('/', function (req, res) {
    systemloginrequest_1.default.getClients(res);
});
routes.get('/sem-grupo', function (req, res) {
    systemloginrequest_1.default.getClientsWithoutGroup(res);
});
routes.get('/admin', function (req, res) {
    systemloginrequest_1.default.getClients(res);
});
routes.get('/campos', function (req, res) {
    systemloginrequest_1.default.getFields(res);
});
routes.get('/usuario/:cnpj', function (req, res) {
    var cnpj = Number(req.params.cnpj);
    systemloginrequest_1.default.getClientByCNPJ(cnpj, res);
});
routes.get('/idCloud/:idCLoud', function (req, res) {
    var idCLoud = Number(req.params.idCLoud);
    systemloginrequest_1.default.getClientByIdCloud(idCLoud, res);
});
routes.get('/externo/:clientName', function (req, res) {
    var clientName = req.params.clientName;
    var dataPromise = systemloginrequest_1.default.getExternalClients(clientName);
    Promise.resolve(dataPromise).then(function (response) {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            });
        }
        else {
            return res.status(200).json({ message: "Clientes encontrados", data: response });
        }
    });
});
routes.get('/registro/:idCloud', function (req, res) {
    var idCloud = req.params.idCloud;
    console.log(idCloud);
    var dataPromise = systemloginrequest_1.default.getClientRegistry(idCloud);
    Promise.resolve(dataPromise).then(function (response) {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            });
        }
        else {
            return res.status(200).json({ message: "Cliente de idCloud ".concat(idCloud, " encontrado"), data: response });
        }
    });
});
routes.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    systemloginrequest_1.default.getClientById(id, res);
});
//Rota para cadastrar um novo usuário
routes.post('/', 
// Algumas verificações de validação
(0, express_validator_1.body)('EMAIL').isEmail().normalizeEmail(), (0, express_validator_1.body)('CNPJ').not().isEmpty().trim().escape(), (0, express_validator_1.body)('NOME').not().isEmpty().trim().escape(), (0, express_validator_1.body)('NOMEESTABELECIMENTO').not().isEmpty().trim().escape(), function (req, res) {
    var errors = (0, express_validator_1.validationResult)(req); //Pega todos os erros de validação
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); //Retorna os erros de validação
    }
    var client = req.body; //Pega os dados do usuário
    var cnpj = client.CNPJ.replace('&#x2F;', '/').replace(/\D/g, '');
    client.CNPJ = cnpj;
    db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ =".concat(cnpj), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var password, passwordEncrypted, HASHTOKEN, SendEmailService, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    if (!err) return [3 /*break*/, 1];
                    console.log(err);
                    return [3 /*break*/, 5];
                case 1:
                    if (!(results.length > 0)) return [3 /*break*/, 2];
                    //Se existir, retorna um erro
                    res.status(400).json({
                        message: "Ja existe um pedido de conta com esse CNPJ pendente. \n Caso n\u00E3o tenha solicitado ou esteja demorando, entre em contato com nosso suporte"
                    });
                    return [3 /*break*/, 5];
                case 2:
                    password = Math.random().toString(36).substring(2, 8);
                    passwordEncrypted = bcrypt_1.default.hash(password, 5);
                    return [4 /*yield*/, passwordEncrypted
                            .then(function (result) {
                            client.PASSWORD = result; //Adiciona a senha criptografada ao usuário
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                case 3:
                    _a.sent();
                    HASHTOKEN = bcrypt_1.default.hash((client.CNPJ + client.IDCLOUD), 8);
                    return [4 /*yield*/, HASHTOKEN
                            .then(function (result) {
                            client.HASHTOKEN = result; //Adiciona o hash ao usuário
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                case 4:
                    _a.sent();
                    if (res.statusCode !== 200) {
                        res.status(400).json({ message: "Erro ao criar o cliente" });
                    }
                    else {
                        try {
                            systemloginrequest_1.default.createClient(client, res); //Cria o usuário
                            SendEmailService = new sendEmailService_1.default(1, client);
                            SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
                            db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ =".concat(cnpj), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
                                var tableData_1, fieldNamesTable2, fieldNamesTable1, _loop_1, i;
                                return __generator(this, function (_a) {
                                    //Verifica se existe algum usuário com o mesmo cnpj
                                    try {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            if (results.length > 0) {
                                                tableData_1 = {
                                                    idTable: [1, 2],
                                                    idUser: results[0].ID
                                                };
                                                fieldNamesTable2 = "IDCLOUD,ID,IDCIDADE,IDREPRESENTANTE,NOMEFANTASIA,NOMECONTATO,RAZAOSOCIAL,CNPJ,CNAE,INSCRICAOESTADUAL,EMAIL,RAMOATIVIDADE,REPRESENTANTE,NOVO,STATUS,ATIVO,CEP,BAIRRO,CIDADE,COMPLEMENTO,NUMERO,ENDERECO,UF,DATAVIGENCIA,CADASTRADAPOR,OBSERVACOES,FONECOBRANCA,FONEADICIONAL,DATAINICIO,DIASLICENCAPROVISORIA,VALORMENSALIDADE,VALORIMPLANTACAO,A\u00C7\u00D5ES".split(',');
                                                fieldNamesTable1 = "ID,NOME,NOMEESTABELECIMENTO,EMAIL,CNPJ,IDCLOUD,RAMODEATIVIDADE,STATUS,ADMIN,A\u00C7\u00D5ES".split(',');
                                                _loop_1 = function (i) {
                                                    if (tableData_1.idTable[i] == 1) {
                                                        fieldNamesTable1.forEach(function (field) {
                                                            var newData = {
                                                                idUser: tableData_1.idUser,
                                                                idTable: tableData_1.idTable[i],
                                                                fieldName: field,
                                                                fieldCaption: field,
                                                                visible: 1
                                                            };
                                                            sysUserTableCustom_1.default.createTable(newData, res); //Cria a tabela na base de dados
                                                        });
                                                    }
                                                    else if (tableData_1.idTable[i] == 2) {
                                                        fieldNamesTable2.forEach(function (field) {
                                                            var newData = {
                                                                idUser: tableData_1.idUser,
                                                                idTable: tableData_1.idTable[i],
                                                                fieldName: field,
                                                                fieldCaption: field,
                                                                visible: field === 'AÇÕES' || "IDCLOUD" || "RAZAOSOCIAL" || "NOMEFANTASIA" || "CNPJ" || "NOMECONTATO" || "CEP" ? 1 : 0
                                                            };
                                                            sysUserTableCustom_1.default.createTable(newData, res); //Cria a tabela na base de dados
                                                        });
                                                    }
                                                };
                                                for (i = 0; i < tableData_1.idTable.length; i++) {
                                                    _loop_1(i);
                                                }
                                            }
                                        }
                                    }
                                    catch (err) {
                                        console.log(err);
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                            res.status(200).json({ message: "Cliente criado com sucesso" });
                        }
                        catch (err) {
                            console.log(err);
                            res.status(400).json({ message: "Erro ao criar o cliente" });
                        }
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
});
//Rota para Login de um usuário
routes.post('/login', function (req, res) {
    var _a = req.body, CNPJ = _a.CNPJ, PASSWORD = _a.PASSWORD; //Pega os dados do usuário
    db_1.default.query('SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ' + parseInt(CNPJ), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var passwordEncrypted, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!err) return [3 /*break*/, 1];
                    console.log(err);
                    return [3 /*break*/, 4];
                case 1:
                    if (!(results.length > 0)) return [3 /*break*/, 3];
                    passwordEncrypted = results[0].PASSWORD;
                    return [4 /*yield*/, bcrypt_1.default.compare(PASSWORD, passwordEncrypted).then(function (result) {
                            //Compara a senha criptografada com a senha digitada						
                            if (result) {
                                console.log(results);
                                var token = jsonwebtoken_1.default.sign({
                                    //Cria o token
                                    id: results[0].ID,
                                    cnpj: results[0].CNPJ,
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
                                    res.status(200).json({ message: "Cliente logado com sucesso", token: token, isAdmin: false }); //Retorna o token e se o usuário é admin
                                }
                                else if (result && results[0].STATUS === 1 && results[0].ADMIN === 1) {
                                    res.status(200).json({
                                        message: "Cliente logado com sucesso",
                                        token: token,
                                        isAdmin: true,
                                        id: results[0].ID,
                                        ramo: results[0].RAMODEATIVIDADE,
                                    }); //Retorna o token e se o usuário é admin
                                }
                                else if (result && results[0].STATUS === 0) {
                                    res.status(400).json({
                                        message: "Sua conta est\u00E1 sendo analisada, para mais informa\u00E7\u00F5es contate o nosso suporte (45) 99934-3293"
                                    }); //Retorna uma menagem de erro
                                }
                            }
                            else {
                                res.status(400).json({ message: "Senha incorreta" }); //Retorna uma mensagem de erro
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    res.status(400).json({ message: "CNPJ n\u00E3o cadastrado" });
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
});
//Rota para atualizar um usuário
routes.patch('/logout', function (req, res) {
    return { token: null }; //Retorna um token nulo
});
routes.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var client = req.body;
    systemloginrequest_1.default.updateClient(id, client, res);
});
routes.patch('/change-password/:cnpj', function (req, res) {
    var CNPJ = req.params.cnpj; //Pega o cnpj do usuário
    var oldPassword = req.body.oldPassword; //Pega a senha antiga
    var newPassword = req.body.newPassword; //Pega a nova senha
    db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ".concat(CNPJ), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var oldPasswordEncrypted, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!err) return [3 /*break*/, 1];
                    console.log(err);
                    return [3 /*break*/, 4];
                case 1:
                    if (!(results.length > 0)) return [3 /*break*/, 3];
                    oldPasswordEncrypted = results[0].PASSWORD;
                    return [4 /*yield*/, bcrypt_1.default.compare(oldPassword, oldPasswordEncrypted).then(function (result) {
                            if (result) { //Se for igual, criptografa a nova senha e atualiza o usuário
                                var passwordEncrypted = bcrypt_1.default.hash(newPassword, 5);
                                passwordEncrypted
                                    .then(function (result) {
                                    if (result) {
                                        var data = {
                                            PASSWORD: result
                                        };
                                        db_1.default.query("UPDATE SYSLOGINREQUEST SET ? WHERE CNPJ = ".concat(CNPJ), [data], function (err, results) {
                                            if (err) {
                                                console.log(err);
                                            }
                                            else {
                                                res.status(200).json({ message: "Senha atualizada com sucesso" });
                                            }
                                        });
                                    }
                                    else {
                                        res.status(400).json({ message: "Erro ao atualizar a senha" });
                                    }
                                })
                                    .catch(function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log(result);
                                res.status(400).json({ message: "Senha atual incorreta" });
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    res.status(400).json({ message: "Usu\u00E1rio n\u00E3o encontrado" });
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); });
});
routes.patch('/forgot-password/:cnpj', function (req, res) {
    var cnpj = req.params.cnpj;
    db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ".concat(cnpj), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var password_1, passwordEncrypted;
        return __generator(this, function (_a) {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    password_1 = Math.random().toString(36).substring(2, 8);
                    passwordEncrypted = bcrypt_1.default.hash(password_1, 5);
                    passwordEncrypted
                        .then(function (result) {
                        if (result) {
                            var data = {
                                PASSWORD: result
                            };
                            db_1.default.query("UPDATE SYSLOGINREQUEST SET ? WHERE CNPJ = ".concat(cnpj), [data], function (err) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    var SendEmailService = new sendEmailService_1.default(1, results[0]);
                                    SendEmailService.sendPasswordEmail(password_1); //Envia o email com a senha
                                    res
                                        .status(200)
                                        .json({
                                        message: "Um email com a nova senha foi enviado para ".concat(results[0].EMAIL)
                                    });
                                }
                            });
                        }
                        else {
                            res.status(400).json({ message: "Erro ao atualizar a senha" });
                        }
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                }
                else {
                    res.status(400).json({ message: "Usu\u00E1rio n\u00E3o encontrado" });
                }
            }
            return [2 /*return*/];
        });
    }); });
});
routes.patch('/update-idcloud/:cnpj', function (req, res) {
    var newIdCloud = req.body.IDCLOUD;
    var cnpj = req.params.cnpj;
    db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = ".concat(cnpj), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    data = results[0];
                    data.IDCLOUD = newIdCloud;
                    systemloginrequest_1.default.updateClient(data.ID, data, res);
                }
                else {
                    res.status(400).json({ message: "Cliente de cnpj ".concat(cnpj, " n\u00E3o encontrado!") }).send();
                }
            }
            return [2 /*return*/];
        });
    }); });
});
routes.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    db_1.default.query("SELECT * FROM SYSSELECTTABLECOLUMN WHERE idUser = ".concat(id), function (err, results) {
        try {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    db_1.default.query("DELETE FROM SYSSELECTTABLECOLUMN WHERE idUser = ".concat(id), function (err, result) {
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
//# sourceMappingURL=rotasClientes.js.map