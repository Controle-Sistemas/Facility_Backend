"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
var sendEmailService_1 = __importDefault(require("../../services/sendEmailService"));
routes.post('/duvida', function (req, res) {
    var duvida = req.body;
    var sendEmailService = new sendEmailService_1.default(0);
    sendEmailService.sendEmailDuvida(duvida);
    res.status(200).send();
});
exports.default = routes;
//# sourceMappingURL=rotasEmails.js.map