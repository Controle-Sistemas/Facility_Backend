"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
exports.default = {
    dest: path_1.default.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path_1.default.resolve(__dirname, '..', '..', 'temp', 'uploads'));
        },
        filename: function (req, file, cb) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err) {
                    cb(err, '');
                }
                file.key = "".concat(hash.toString('hex'), "-").concat(file.originalname); //Nome do arquivo com o hash
                console.log(file.key);
                cb(null, file.key);
            });
        }
    }),
};
//# sourceMappingURL=multer.js.map