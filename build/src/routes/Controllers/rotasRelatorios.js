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
var ejs_1 = __importDefault(require("ejs"));
var path_1 = __importDefault(require("path"));
var puppeteer_1 = __importDefault(require("puppeteer"));
var lodash_1 = __importDefault(require("lodash"));
var router = express_1.default.Router();
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
router.post('/:relatorioType', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, relatorioType, browser, page, date, dateTime, pdf;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                relatorioType = req.params.relatorioType;
                return [4 /*yield*/, puppeteer_1.default.launch({ headless: true })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                date = new Date();
                dateTime = "".concat(date.toLocaleDateString(), " \u00E0s ").concat(date.toLocaleTimeString());
                return [4 /*yield*/, page.setRequestInterception(true)];
            case 3:
                _a.sent();
                page.on("request", function (interceptedRequest) {
                    interceptedRequest.continue({
                        method: "POST",
                        postData: JSON.stringify(data),
                        headers: { "Content-Type": "application/json" },
                    });
                });
                return [4 /*yield*/, page.goto("http://localhost:8000/relatorios/pdf/".concat(relatorioType), {
                        waitUntil: 'networkidle0'
                    })];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.pdf({
                        printBackground: true,
                        format: 'A4',
                        landscape: true,
                        margin: {
                            top: '20px',
                            bottom: '40px',
                            left: '40px',
                            right: '40px'
                        },
                        footerTemplate: "\n        <span style='font-size:'small'>Relat\u00F3rio gerado atrav\u00E9s do Portal Facility da Controle Sistemas</span>\n        "
                    })];
            case 5:
                pdf = _a.sent();
                return [4 /*yield*/, browser.close()];
            case 6:
                _a.sent();
                res.contentType("application/pdf");
                res.send(pdf);
                return [2 /*return*/];
        }
    });
}); });
router.post('/pdf/:relatorioType', function (req, res) {
    var relatorioType = req.params.relatorioType;
    var templatePath = path_1.default.join(__dirname, '../', '../', 'utils', 'pdf-templates', "".concat(relatorioType, ".ejs"));
    // console.log(req.body)
    ejs_1.default.renderFile(templatePath, getParamsByRelatoryType(req.body, relatorioType), function (err, data) {
        if (err) {
            console.log(err.message);
            res.send("Erro \u26A0\uFE0F".concat('\n', " ").concat(err.name, ": ").concat(err.message));
        }
        else {
            res.send(data);
        }
    });
});
function getParamsByRelatoryType(data, relatorioType) {
    switch (relatorioType) {
        case 'lucratividadeProdutos':
            var groups = data.groups;
            var dateInit = data.dateInit;
            var dateFinal = data.dateFinal;
            var timeInit = data.timeInit;
            var timeFinal = data.timeFinal;
            var empresa = data.empresa;
            var qtdeTotal = void 0;
            var vlTotal = void 0;
            var cTotal = void 0;
            var lTotal = void 0;
            var percentualTotal = void 0;
            formatLucratividadeData(data);
            return { groups: groups, dateInit: dateInit, dateFinal: dateFinal, qtdeTotal: qtdeTotal, empresa: empresa, vlTotal: vlTotal, cTotal: cTotal, lTotal: lTotal, percentualTotal: percentualTotal, timeInit: timeInit, timeFinal: timeFinal };
            break;
        case 'pedidoEstoque':
            var registry = data;
            var date = new Date();
            var infoDate = date.toLocaleDateString();
            var infoTime = date.toLocaleTimeString();
            return { registry: registry, infoDate: infoDate, infoTime: infoTime };
            break;
        default:
            return {};
            break;
    }
}
function formatLucratividadeData(data) {
    var aux = lodash_1.default.groupBy(data);
    console.log(data);
}
exports.default = router;
//# sourceMappingURL=rotasRelatorios.js.map