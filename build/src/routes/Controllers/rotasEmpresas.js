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
var enterprisesModel_1 = __importDefault(require("../../db/Models/enterprisesModel"));
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        enterprisesModel_1.default.getEnterprises(res); //Pega todas as empresas da base de dados
        return [2 /*return*/];
    });
}); });
routes.get('/:idCloud', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        id = Number(req.params.idCloud);
        enterprisesModel_1.default.getEnterprise(id, res); //Pega a empresa pelo id
        return [2 /*return*/];
    });
}); });
routes.get('/cnpj/:cnpj', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cnpj;
    return __generator(this, function (_a) {
        cnpj = req.params.cnpj;
        enterprisesModel_1.default.getEnterpriseCnpj(cnpj, res); //Pega a empresa pelo cnpj
        return [2 /*return*/];
    });
}); });
routes.post('/', function (req, res) {
    // Empresas.getAll().then(response => {
    //     response.Empresas.forEach((empresa:any) => {
    //         EnterprisesModel.createEnterprise(empresa, res)
    //     });
    // })
    var enterpriseData = req.body; //Pega os dados da empresa
    enterprisesModel_1.default.createEnterprise(enterpriseData, res); //Cria a empresa
});
routes.patch('/:idCloud', function (req, res) {
    var id = Number(req.params.idCloud); //Pega o id da empresa
    var enterpriseData = req.body; //Pega os dados da empresa
    enterprisesModel_1.default.updateEnterprise(id, enterpriseData, res); //Atualiza a empresa
});
routes.delete('/:idCloud', function (req, res) {
    var id = Number(req.params.idCloud); //Pega o id da empresa
    enterprisesModel_1.default.deleteEnterprise(id, res); //Deleta a empresa
});
exports.default = routes;
//# sourceMappingURL=rotasEmpresas.js.map