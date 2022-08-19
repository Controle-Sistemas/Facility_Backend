"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorialModel_1 = __importDefault(require("../../db/Models/tutorialModel"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../../config/multer"));
const upload = (0, multer_1.default)(multer_2.default);
const router = express_1.default.Router();
router.get('/', (req, res) => {
    tutorialModel_1.default.getTutorials(res);
});
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    tutorialModel_1.default.getTutorialById(id, res);
});
router.get('/categoria/:categoria', (req, res) => {
    const categoria = Number(req.params.categoria);
    tutorialModel_1.default.getTutorialByCategoria(categoria, res);
});
router.post('/', upload.array('files', 10), (req, res) => {
    const tutorial = req.body;
    const files = req.files;
    console.log(typeof files);
    if (files) {
        files.forEach(file => {
            tutorial.FILE += file.filename + ';';
        });
        delete tutorial.file;
    }
    console.log(tutorial);
    tutorialModel_1.default.createTutorial(tutorial, res);
});
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const tutorial = req.body;
    tutorialModel_1.default.updateTutorial(id, tutorial, res);
});
router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    tutorialModel_1.default.deleteTutorial(id, res);
});
exports.default = router;
