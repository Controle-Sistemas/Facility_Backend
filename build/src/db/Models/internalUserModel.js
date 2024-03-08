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
var Internos = /** @class */ (function () {
    function Internos() {
    }
    Internos.prototype.getAll = function (res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS", function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Internos.prototype.getInternalById = function (id, res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Interno encontrado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Internos.prototype.getInternalBySector = function (sector, res) {
        try {
            __1.default.query("SELECT * FROM INTERNOS WHERE SETOR = ".concat(sector), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Internos encontrados",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Internos.prototype.createInternal = function (internal, res) {
        try {
            __1.default.query("INSERT INTO INTERNOS SET ?", internal, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    res.status(200).send({
                        message: "Interno criado",
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Internos.prototype.updateInternal = function (id, internal, res) {
        try {
            __1.default.query("UPDATE INTERNOS SET ? WHERE ID = ".concat(id), internal, function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    console.log(results);
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Interno atualizado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno Encontrado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    Internos.prototype.changeInternalPassword = function (id, oldPassword, newPassword, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    __1.default.query("SELECT * FROM INTERNOS WHERE ID = '".concat(id, "'"), function (err, results) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(results);
                                // if (results.length > 0) {
                                //     const passwordEncrypted = results[0].SENHA
                                //     await bcrypt.compare(oldPassword, passwordEncrypted).then((result) => {
                                //         if (result) {
                                //             connection.query(`UPDATE INTERNOS SET SENHA=${bcrypt.hash(newPassword, 5)} WHERE ID = ${id}`, (err, results: any) => {
                                //                 if (err) {
                                //                     console.log(err);
                                //                    return res.status(400).send({ message: `Senha atual incorreta`, data: passwordEncrypted })
                                //                 } else {
                                //                     console.log(results)
                                //                     if (results.affectedRows > 0) {
                                //                         return res.status(200).json({ message: `Senha do interno atualizada com sucesso`, data: result })
                                //                     }
                                //                 }
                                //             });
                                //         } else {
                                //             return res.status(404).json({ message: `Interno não encontrado`, data: results })
                                //         }
                                //     });
                                // }
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                catch (err) {
                    return [2 /*return*/, res.status(500).json({ message: "N\u00E3o foi poss\u00EDvel atualizar", data: err })];
                }
                return [2 /*return*/];
            });
        });
    };
    Internos.prototype.deleteInternal = function (id, res) {
        try {
            __1.default.query("DELETE FROM INTERNOS WHERE ID = ".concat(id), function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                else {
                    if (results.affectedRows > 0) {
                        res.status(200).send({
                            message: "Interno deletado",
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: "Nenhum interno deletado"
                        });
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    };
    return Internos;
}());
exports.default = new Internos();
//# sourceMappingURL=internalUserModel.js.map