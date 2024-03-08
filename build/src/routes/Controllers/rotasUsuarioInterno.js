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
var internalUserModel_1 = __importDefault(require("../../db/Models/internalUserModel"));
var db_1 = __importDefault(require("../../db"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
var auth_1 = __importDefault(require("../../config/auth"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    internalUserModel_1.default.getAll(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    internalUserModel_1.default.getInternalById(id, res);
});
router.get('/setor/:setor', function (req, res) {
    var idSetor = Number(req.params.setor);
    internalUserModel_1.default.getInternalBySector(idSetor, res);
});
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var internalUserData, password, passwordEncrypted, SendEmailService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                internalUserData = req.body;
                if (!(internalUserData.SENHA === '' || !internalUserData.SENHA)) return [3 /*break*/, 2];
                password = Math.random().toString(36).substring(2, 8);
                passwordEncrypted = bcrypt_1.default.hash(password, 5);
                return [4 /*yield*/, passwordEncrypted
                        .then(function (result) {
                        internalUserData.SENHA = result; //Adiciona a senha criptografada ao usuário
                    })
                        .catch(function (err) {
                        console.log(err);
                    })];
            case 1:
                _a.sent();
                if (res.statusCode !== 200) {
                    res.status(400).json({ message: "Erro ao criar o INTERNO" });
                }
                else {
                    console.log(internalUserData);
                    internalUserModel_1.default.createInternal(internalUserData, res); //Cria o usuário
                    SendEmailService = new sendEmailService_1.default(2, internalUserData);
                    SendEmailService.sendPasswordEmail(password); //Envia o email com a senha
                }
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
router.post('/login', function (req, res) {
    var internalUserData = req.body;
    db_1.default.query("SELECT * FROM INTERNOS WHERE USUARIO = '".concat(internalUserData.USUARIO, "'"), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var passwordEncrypted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!err) return [3 /*break*/, 1];
                    console.log(err);
                    return [3 /*break*/, 4];
                case 1:
                    if (!(results.length > 0)) return [3 /*break*/, 3];
                    passwordEncrypted = results[0].SENHA;
                    return [4 /*yield*/, bcrypt_1.default.compare(internalUserData.SENHA, passwordEncrypted).then(function (result) {
                            //Compara a senha criptografada com a senha digitada
                            if (result) {
                                var token = jsonwebtoken_1.default.sign({
                                    //Cria o token
                                    id: results[0].ID,
                                    usuario: results[0].USUARIO,
                                }, auth_1.default.secret, {
                                    expiresIn: auth_1.default.expireIn
                                });
                                res.status(200).json({ message: "Interno logado com sucesso", token: token, id: results[0].ID, isAdmin: results[0].ADMIN }); //Retorna o token e se o usuário é admin
                            }
                            else {
                                res.status(400).json({ message: "Senha incorreta" }); //Retorna uma mensagem de erro
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    res.status(400).json({ message: "Usuario n\u00E3o cadastrado" });
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
router.patch('/change-password/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var oldPassword, newPassword, id;
    return __generator(this, function (_a) {
        oldPassword = req.body.oldPassword;
        newPassword = req.body.newPassword;
        id = parseInt(req.params.id);
        console.log(req.params);
        // const data = {
        // 	oldPassword: req.body.oldPassword,
        // 	newPassword: req.body.newPassword
        // }
        db_1.default.query("SELECT * FROM internos WHERE ID = '".concat(parseInt(req.params.id), "'"), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
            var passwordEncrypted_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!err) return [3 /*break*/, 1];
                        return [2 /*return*/, res.status(500).json({ message: "Erro interno", data: results })];
                    case 1:
                        console.log(results);
                        if (!(results.length > 0)) return [3 /*break*/, 3];
                        passwordEncrypted_1 = results[0].SENHA;
                        return [4 /*yield*/, bcrypt_1.default.compare(oldPassword, passwordEncrypted_1).then(function (result) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!result) return [3 /*break*/, 2];
                                            return [4 /*yield*/, bcrypt_1.default.hash(newPassword, 5).then(function (encryptedNewPassword) {
                                                    db_1.default.query("UPDATE INTERNOS SET SENHA='".concat(encryptedNewPassword, "' WHERE ID=").concat(id), function (err, results) {
                                                        if (err) {
                                                            console.log(err);
                                                        }
                                                        else {
                                                            if (results.affectedRows > 0) {
                                                                return res.status(200).json({ message: "Senha do interno atualizada com sucesso", data: result });
                                                            }
                                                        }
                                                    });
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2: return [2 /*return*/, res.status(400).json({ message: "Senha atual incorreta", data: passwordEncrypted_1 })];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, res.status(404).json({ message: "Interno n\u00E3o encontrado", data: results })];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
router.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var internalUserData = req.body;
    internalUserModel_1.default.updateInternal(id, internalUserData, res);
});
router.patch('/forgot-password/:user', function (req, res) {
    var user = req.params.user;
    db_1.default.query("SELECT * FROM internos WHERE USUARIO = '".concat(user, "'"), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
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
                                SENHA: result
                            };
                            db_1.default.query("UPDATE internos SET ? WHERE USUARIO = '".concat(user, "'"), [data], function (err) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    var SendEmailService = new sendEmailService_1.default(2, results[0]);
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
router.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    internalUserModel_1.default.deleteInternal(id, res);
});
exports.default = router;
//# sourceMappingURL=rotasUsuarioInterno.js.map