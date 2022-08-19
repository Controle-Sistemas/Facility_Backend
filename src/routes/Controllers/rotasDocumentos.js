"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentsModel_1 = __importDefault(require("../../db/Models/documentsModel"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../../config/multer"));
const db_1 = __importDefault(require("../../db"));
const sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
const upload = (0, multer_1.default)(multer_2.default);
const router = express_1.default.Router();
router.get('/', (req, res) => {
    documentsModel_1.default.getAllDocuments(res);
});
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    documentsModel_1.default.getDocumentById(id, res);
});
router.get('/cnpj/:cnpj', (req, res) => {
    const cnpj = req.params.cnpj;
    documentsModel_1.default.getDocumentByUserCNPJ(cnpj, res);
});
router.get('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    documentsModel_1.default.getDocumentByUserId(id, res);
});
router.post('/', upload.array('files', 10), (req, res) => {
    const document = req.body;
    const files = req.files;
    console.log(typeof files);
    if (files) {
        files.forEach(file => {
            document.FILE += file.filename + ';';
        });
        delete document.file;
    }
    console.log(document);
    if (document.ENVIAREMAIL === "1") {
        db_1.default.query(`SELECT * FROM sysloginrequest WHERE CNPJ = '${document.CNPJ}'`, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                if (result) {
                    console.log(result);
                    const SendEmailService = new sendEmailService_1.default(result);
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
});
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const document = req.body;
    documentsModel_1.default.updateDocument(id, document, res);
});
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    documentsModel_1.default.deleteDocument(id, res);
});
exports.default = router;
