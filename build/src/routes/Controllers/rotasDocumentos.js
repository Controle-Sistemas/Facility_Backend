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
var documentsModel_1 = __importDefault(require("../../db/Models/documentsModel"));
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../../config/multer"));
var db_1 = __importDefault(require("../../db"));
var sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
var uploadImageService_1 = __importDefault(require("../../services/uploadImageService"));
var deleteImageService_1 = __importDefault(require("../../services/deleteImageService"));
var upload = (0, multer_1.default)(multer_2.default);
var router = express_1.default.Router();
router.get('/', function (req, res) {
    documentsModel_1.default.getAllDocuments(res);
});
router.get('/:id', function (req, res) {
    var id = Number(req.params.id);
    documentsModel_1.default.getDocumentById(id, res);
});
router.get('/cnpj/:cnpj', function (req, res) {
    var cnpj = req.params.cnpj;
    documentsModel_1.default.getDocumentByUserCNPJ(cnpj, res);
});
router.get('/user/:id', function (req, res) {
    var id = Number(req.params.id);
    documentsModel_1.default.getDocumentByUserId(id, res);
});
router.post('/', upload.array('files', 10), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var document, files, uploadImageService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                document = req.body;
                files = req.files;
                uploadImageService = new uploadImageService_1.default();
                return [4 /*yield*/, uploadImageService.execute(files, 'documentos').then(function (result) {
                        if (files) {
                            files.forEach(function (file) {
                                document.FILE !== undefined ? document.FILE += file.filename.replace(/ /g, '+') + ';' : document.FILE = file.filename.replace(/ /g, '+') + ';';
                                console.log(file.filename);
                            });
                            delete document.file;
                        }
                        console.log(document);
                        if (document.ENVIAREMAIL === "1") {
                            db_1.default.query("SELECT * FROM SYSLOGINREQUEST WHERE CNPJ = '".concat(document.CNPJ, "'"), function (err, result) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    if (result) {
                                        console.log(result);
                                        var SendEmailService = new sendEmailService_1.default(1, result[0]);
                                        SendEmailService.sendDocumentEmail(document);
                                        console.log('Email enviado com sucesso');
                                    }
                                    else {
                                        console.log('Usuário não encontrado');
                                    }
                                }
                            });
                            delete document.ENVIAREMAIL;
                        }
                        else {
                            delete document.ENVIAREMAIL;
                        }
                        documentsModel_1.default.addDocument(document, res);
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
    var document = req.body;
    documentsModel_1.default.updateDocument(id, document, res);
});
router.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteImageService;
    return __generator(this, function (_a) {
        id = Number(req.params.id);
        deleteImageService = new deleteImageService_1.default();
        db_1.default.query("SELECT FILE FROM DOCUMENTOS WHERE ID = ".concat(id), function (err, results) { return __awaiter(void 0, void 0, void 0, function () {
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!err) return [3 /*break*/, 1];
                        console.log(err);
                        return [3 /*break*/, 3];
                    case 1:
                        files = results[0].FILE.replace(';', '');
                        return [4 /*yield*/, deleteImageService.execute(files, "documentos").then(function (result) {
                                //DocumentsModel.deleteDocument(id, res);
                            }).catch(function (err) {
                                console.log(err);
                                res.status(400).json({
                                    message: "Erro ao deletar a imagem na AmazonS3"
                                });
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
exports.default = router;
//# sourceMappingURL=rotasDocumentos.js.map