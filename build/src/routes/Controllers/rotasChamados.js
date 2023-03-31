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
var chamadosModel_1 = __importDefault(require("../../db/Models/chamadosModel"));
var multer_1 = __importDefault(require("multer"));
var db_1 = __importDefault(require("../../db"));
var multer_2 = __importDefault(require("../../config/multer"));
var node_cron_1 = __importDefault(require("node-cron"));
var sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
var uploadImageService_1 = __importDefault(require("../../services/uploadImageService"));
var deleteImageService_1 = __importDefault(require("../../services/deleteImageService"));
var upload = (0, multer_1.default)(multer_2.default);
var router = express_1.default.Router();
router.get('/', function (req, res) {
    chamadosModel_1.default.getAll(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    chamadosModel_1.default.getChamadoById(id, res);
});
router.get('/setor/:setor', function (req, res) {
    var idSetor = Number(req.params.setor);
    chamadosModel_1.default.getChamadoBySector(idSetor, res);
});
router.get('/interno/:interno', function (req, res) {
    var idInterno = Number(req.params.interno);
    chamadosModel_1.default.getChamadoByInternalId(idInterno, res);
});
router.get('/interno/usuario/:usuario', function (req, res) {
    var internoUsername = req.params.usuario;
    chamadosModel_1.default.getChamadoByInternalUsername(internoUsername, res);
});
router.get('/status/:status', function (req, res) {
    var idStatus = Number(req.params.status);
    chamadosModel_1.default.getChamadoByStatus(idStatus, res);
});
node_cron_1.default.schedule(' 00 10 * * *', function () { return __awaiter(void 0, void 0, void 0, function () {
    function getChamados() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.default
                            .promise()
                            .query("SELECT * FROM CHAMADOS WHERE RECORRENTE = 1 ")
                            .then(function (response) {
                            var aux = response[0].map(function (chamado) {
                                if (chamado.TIPORECORRENCIA === 0) {
                                    return chamado.DATARECORRENCIA === diaAtual && chamado;
                                }
                                else if (chamado.TIPORECORRENCIA === 1) {
                                    return chamado.DATARECORRENCIA === diaSemanaAtual && chamado;
                                }
                            });
                            return aux;
                        })
                            .catch(function (err) {
                            return err;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function getInternos() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.default
                            .promise()
                            .query("SELECT * FROM INTERNOS ")
                            .then(function (response) {
                            return response[0];
                        })
                            .catch(function (err) {
                            return err;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    var date, diaAtual, diaSemanaAtual, chamados, internos, aux;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = new Date();
                diaAtual = date.getDate().toString().length === 1 ? "0".concat(date.getDate()) : date.getDate().toString();
                diaSemanaAtual = date.getDay();
                return [4 /*yield*/, getChamados()];
            case 1:
                chamados = _a.sent();
                return [4 /*yield*/, getInternos()];
            case 2:
                internos = _a.sent();
                aux = chamados.map(function (chamado) {
                    return internos.filter(function (interno) { return chamado.INTERNORECEPTOR === interno.USUARIO; });
                }).filter(function (item) { return item.length > 0; });
                internos.forEach(function (interno) {
                    if (aux.find(function (item) { return item[0].ID === interno.ID; })) {
                        var sendEmailChamado = new sendEmailService_1.default(2, interno);
                        sendEmailChamado.sendEmailChamadosRecorrentes(chamados.filter(function (chamado) { return chamado.INTERNORECEPTOR === interno.USUARIO; }));
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/user/:user', function (req, res) {
    var idUser = Number(req.params.user);
    chamadosModel_1.default.getChamadoByUserId(idUser, res);
});
router.post('/', upload.array('FILE', 10), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var chamadoData, files, uploadImageService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                chamadoData = req.body;
                files = req.files;
                uploadImageService = new uploadImageService_1.default();
                return [4 /*yield*/, uploadImageService.execute(files, 'chamados').then(function (result) {
                        if (files) {
                            files.forEach(function (file) {
                                chamadoData.FILE !== undefined ? chamadoData.FILE += file.filename.replace(/ /g, '+') + ';' : chamadoData.FILE = file.filename.replace(/ /g, '+') + ';';
                            });
                        }
                        console.log(chamadoData);
                        db_1.default.query("SELECT * FROM INTERNOS WHERE USUARIO = '".concat(chamadoData.INTERNORECEPTOR, "'"), function (err, results) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                var emailService = new sendEmailService_1.default(2, results[0]);
                                emailService.sendEmailChamado(chamadoData);
                            }
                        });
                        db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE NOME = '".concat(chamadoData.CLIENTE, "' "), function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                chamadoData.IDCLIENTE = result[0].ID;
                                delete chamadoData.CLIENTE;
                                chamadosModel_1.default.createChamado(chamadoData, res);
                            }
                        });
                    }).catch(function (err) {
                        console.log(err);
                        res.status(400).json({
                            message: "Erro ao adicionar imagem na AmazonS3"
                        });
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
router.patch('/:id', function (req, res) {
    var id = Number(req.params.id);
    var chamadoData = req.body;
    chamadosModel_1.default.updateChamado(id, chamadoData, res);
});
router.patch('/tipo/:id', function (req, res) {
    var id = Number(req.params.id);
    var chamadoData = req.body;
    chamadosModel_1.default.updateChamadoType(id, chamadoData, res);
});
router.delete('/:id', function (req, res) {
    var id = Number(req.params.id);
    var deleteImageService = new deleteImageService_1.default();
    db_1.default.query("SELECT * FROM CHAMADOS WHERE ID = ".concat(id), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!err) return [3 /*break*/, 1];
                    console.log(err);
                    return [3 /*break*/, 4];
                case 1:
                    if (!results[0].FILE) return [3 /*break*/, 3];
                    files = results[0].FILE.split(';');
                    return [4 /*yield*/, deleteImageService.execute(files, "chamados").then(function (result) {
                            chamadosModel_1.default.deleteChamado(id, res);
                        }).catch(function (err) {
                            console.log(err);
                            res.status(400).json({
                                message: "Erro ao deletar a imagem na AmazonS3"
                            });
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    chamadosModel_1.default.deleteChamado(id, res);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
exports.default = router;
//# sourceMappingURL=rotasChamados.js.map