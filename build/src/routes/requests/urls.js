"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PRODUCT_URL = exports.EXTERNAL_API = exports.EXTERNAL_API_URL = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.EXTERNAL_API_URL = "https://apilicenca.controleautomacao.com.br/api/";
exports.EXTERNAL_API = "".concat(process.env.FACILITY_SOCKET_URL, ":").concat(process.env.FACILITY_SOCKET_PORT, "/socket");
exports.API_PRODUCT_URL = 'http://167.114.135.197:9000/socket';
//# sourceMappingURL=urls.js.map