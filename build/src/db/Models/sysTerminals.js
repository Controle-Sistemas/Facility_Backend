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
var __1 = __importDefault(require(".."));
var urls_1 = require("../../routes/requests/urls");
var axios_1 = __importDefault(require("axios"));
var TerminalModel = /** @class */ (function () {
    function TerminalModel() {
    }
    TerminalModel.prototype.getTerminalsByIdCloud = function (idCloud) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { idCloud: "".concat(idCloud) };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/CtrlTerminals"), {
                                headers: {
                                    "socket_client": "@ControleLicenca"
                                },
                                data: params,
                            }).then(function (response) {
                                return response.data;
                            })
                                .catch(function (error) {
                                console.log("Erro: " + error.errno + ' - ' + error.code);
                                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                                return response;
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TerminalModel.prototype.refreshLicense = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = data;
                        console.log(params);
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/CtrlReleaseDate"), {
                                headers: {
                                    "socket_client": "@ControleLicenca"
                                },
                                data: params,
                            }).then(function (response) {
                                return response.data;
                            })
                                .catch(function (error) {
                                console.log("Erro: " + error.errno + ' - ' + error.code);
                                var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
                                return response;
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TerminalModel.prototype.getTerminals = function (req, res) {
        __1.default.query("SELECT * FROM TERMINAIS", function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'TERMINAIS listados com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.getTerminal = function (id, res) {
        __1.default.query("SELECT * FROM TERMINAIS WHERE idEmpresa = ?", [id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal listado com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.createTerminal = function (terminalData, res) {
        __1.default.query("INSERT INTO TERMINAIS SET ?", [terminalData]);
    };
    TerminalModel.prototype.updateTerminal = function (id, terminalData, res) {
        __1.default.query("UPDATE TERMINAIS SET ? WHERE id = ?", [terminalData, id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal Atualizado com sucesso',
                    data: results
                });
            }
        });
    };
    TerminalModel.prototype.deleteTerminal = function (id, res) {
        __1.default.query("DELETE FROM TERMINAIS WHERE id = ?", [id], function (err, results) {
            if (err) {
                res.status(500).send({
                    message: err
                });
            }
            else {
                res.status(200).send({
                    message: 'Terminal deletado com sucesso',
                    data: results
                });
            }
        });
    };
    return TerminalModel;
}());
exports.default = new TerminalModel();
//# sourceMappingURL=sysTerminals.js.map