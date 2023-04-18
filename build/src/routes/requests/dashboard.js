"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = __importDefault(require("axios"));
var urls_1 = require("./urls");
var DashboardRequest = /** @class */ (function () {
    function DashboardRequest(clientIdCloud) {
        this.clientIdCloud = clientIdCloud;
    }
    DashboardRequest.prototype.getSalesPerMonth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/VWSALESPERMONTH"), {
                            headers: {
                                "socket_client": this.clientIdCloud
                            }
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
    DashboardRequest.prototype.getDailyEvolution = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/getDailyEvolution"), {
                            headers: {
                                "socket_client": "@".concat(this.clientIdCloud)
                            }
                        }).then(function (response) {
                            if (response.data.Error)
                                return { "error": response.data.Error };
                            var data = response.data.dailyEvolution.map(function (dia) { return (__assign(__assign({}, dia), { diaDaSemana: getDiaDaSemana(dia.data) })); });
                            return data;
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
    DashboardRequest.prototype.getRealTimeByIdCloud = function (DateInit, TimeInit) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { DateInit: DateInit, TimeInit: TimeInit };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/RealTime"), {
                                headers: {
                                    "socket_client": "@".concat(this.clientIdCloud)
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
    DashboardRequest.prototype.getValuesFromUsers = function (startDate, finishDate) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            DateInit: startDate,
                            DateFinal: finishDate,
                            ClosedOrOpen: "C"
                        };
                        console.log(params);
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/getValuesFromUsers"), {
                                headers: {
                                    "socket_client": '@20033038' // '@' + this.clientIdCloud 
                                },
                                data: params
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
    DashboardRequest.prototype.getViewPeriodoClosed = function (startDate, finishDate, id) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "id": id,
                            DateInit: startDate,
                            DateFinal: finishDate,
                            ClosedOrOpen: "C"
                        };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/getViewPeriodo"), {
                                headers: {
                                    "socket_client": "@".concat(this.clientIdCloud)
                                },
                                data: params
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
    DashboardRequest.prototype.getViewPeriodoOpen = function (startDate, finishDate, id) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            "id": id,
                            DateInit: startDate,
                            DateFinal: finishDate,
                            ClosedOrOpen: "O"
                        };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/getViewPeriodo"), {
                                headers: {
                                    "socket_client": "@".concat(this.clientIdCloud)
                                },
                                data: params
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
    DashboardRequest.prototype.getProductsByGroupID = function (groupID) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            groupID: groupID
                        };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/ListProductGroup"), {
                                headers: {
                                    "socket_client": "@".concat(this.clientIdCloud)
                                },
                                data: params
                            }).then(function (response) {
                                return response.data.listProductGroup;
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
    DashboardRequest.prototype.getCurveABC = function (startDate, finishDate) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            DateInit: '01.01.2023',
                            DateFinal: '01.04.2023'
                        };
                        return [4 /*yield*/, axios_1.default.get("".concat(urls_1.EXTERNAL_API, "/CurveABC"), {
                                headers: {
                                    "socket_client": "@".concat(this.clientIdCloud)
                                },
                                data: params
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
    return DashboardRequest;
}());
function getDiaDaSemana(date) {
    var weekDays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var dataSplited = date.split('/');
    var dateFormated = "".concat(dataSplited[1], " ").concat(dataSplited[0], " ").concat(dataSplited[2]);
    return weekDays[new Date(dateFormated).getDay()].toUpperCase();
}
exports.default = DashboardRequest;
//# sourceMappingURL=dashboard.js.map