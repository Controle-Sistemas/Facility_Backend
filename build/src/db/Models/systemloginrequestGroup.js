"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var ModeloGrupoEmpresas = /** @class */ (function () {
    function ModeloGrupoEmpresas() {
    }
    ModeloGrupoEmpresas.prototype.getAllFiliais = function (res) {
        try {
            __1.default.query('SELECT * FROM FILIAIS WHERE IDMATRIZ IN (SELECT ID FROM MATRIZES)', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Filiais listadas com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.getMatrizes = function (res) {
        //Retorna todos as contas Matrizes
        try {
            __1.default.query('SELECT * FROM MATRIZES', function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Matrizes listadas com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.getAllGroups = function (res) {
        try {
            __1.default.query("SELECT SYSLOGINREQUEST.ID, NOME, NOMEESTABELECIMENTO AS 'ESTABELECIMENTO', SYSLOGINREQUEST.CNPJ AS 'CNPJ', 'MATRIZ' AS 'TIPO', MATRIZES.ID AS 'GRUPO'\n\t\t\tFROM MATRIZES\n\t\t\tINNER JOIN SYSLOGINREQUEST\n\t\t\tON SYSLOGINREQUEST.IDCLOUD = MATRIZES.IDCLOUDMATRIZ\n\t\t\tUNION\n\t\t\tSELECT SYSLOGINREQUEST.ID, NOME, NOMEESTABELECIMENTO AS 'ESTABELECIMENTO', SYSLOGINREQUEST.CNPJ AS 'CNPJ', 'FILIAL' AS 'TIPO', FILIAIS.IDMATRIZ AS 'GRUPO'\n\t\t\tFROM FILIAIS\n\t\t\tINNER JOIN SYSLOGINREQUEST\n\t\t\tON SYSLOGINREQUEST.CNPJ = FILIAIS.CNPJ", function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Grupos atuais listados com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.getMatrizById = function (id, res) {
        //Retorna uma matriz pelo id
        try {
            __1.default.query('SELECT * FROM MATRIZES WHERE id = ' + id, function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results) {
                        res.status(200).send({
                            message: 'Matriz listada com sucesso',
                            data: results
                        });
                        console.log(res.data);
                    }
                    else {
                        res.status(404).send({
                            message: 'Matriz não encontrada'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.getFiliaisByMatriz = function (id, res) {
        //Retorna as filiais de um grupo pelo id da Matriz do grupo
        try {
            __1.default.query("SELECT * FROM FILIAIS WHERE IDMATRIZ = ".concat(id), function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Filiais do grupo com id -> ".concat(id, " listadas com sucesso"),
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: 'Filiais não encontradas, verifique se o id do grupo está correto'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.getFullGroupByMatrizCnpj = function (CNPJ, res) {
        //Retorna os integrantes de um grupo pelo cnpj da Matriz do grupo
        console.log("Buscando grupo do cnpj:" + CNPJ);
        try {
            __1.default.query("\t\n\t\t\t\tSELECT NOME, NOMEESTABELECIMENTO, SYSLOGINREQUEST.IDCLOUD, 'FILIAL' AS 'TIPO', FILIAIS.IDMATRIZ AS 'GRUPO'\n\t\t\t\tFROM SYSLOGINREQUEST \n\t\t\t\tJOIN FILIAIS ON FILIAIS.IDCLOUD = SYSLOGINREQUEST.IDCLOUD\n\t\t\t\tWHERE FILIAIS.IDCLOUD IN\n\t\t\t\t(SELECT IDCLOUD FROM FILIAIS WHERE IDMATRIZ IN (SELECT ID FROM MATRIZES WHERE ".concat(CNPJ, "= MATRIZES.CNPJ))\n\t\t\t\tUNION\n\t\t\t\tSELECT NOME, NOMEESTABELECIMENTO, SYSLOGINREQUEST.IDCLOUD, 'MATRIZ' AS 'TIPO', MATRIZES.ID AS 'GRUPO'\n\t\t\t\tFROM MATRIZES\n\t\t\t\tINNER JOIN SYSLOGINREQUEST\n\t\t\t\tON SYSLOGINREQUEST.CNPJ = MATRIZES.CNPJ AND SYSLOGINREQUEST.CNPJ = ").concat(CNPJ, "\n\t\t\t\t"), function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    if (results.length > 0) {
                        res.status(200).send({
                            message: "Grupo da matriz de CNPJ ".concat(CNPJ, " listadas com sucesso"),
                            data: results
                        });
                    }
                    else {
                        res.status(404).send({
                            message: 'Grupo não encontrado!'
                        });
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.createFilial = function (filial, res) {
        //Cria uma filial
        console.log(filial);
        try {
            __1.default.query('INSERT INTO FILIAIS SET ?', [filial], function (err, results) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: "Filial vinculada a matriz ".concat(filial.IDMATRIZ, " adicionada com sucesso"),
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.createMatriz = function (matrizDash, res) {
        //Cria uma matriz
        try {
            __1.default.query('INSERT INTO MATRIZES SET ?', [matrizDash], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Matriz adicionada com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.updateMatriz = function (id, matrizDash, res) {
        //Atualiza uma matriz
        try {
            __1.default.query('UPDATE MATRIZES SET ? WHERE id = ?', [matrizDash, id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Matriz atualizada com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.deleteMatriz = function (id, res) {
        //Deleta uma matriz
        try {
            __1.default.query('DELETE FROM MATRIZES WHERE id = ?', [id], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Matriz deletada com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ModeloGrupoEmpresas.prototype.deleteFilial = function (cnpj, res) {
        //Deleta uma filial
        try {
            __1.default.query('DELETE FROM FILIAIS WHERE CNPJ = ?', [cnpj], function (err, results) {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                }
                else {
                    res.status(200).send({
                        message: 'Filial deletada com sucesso',
                        data: results
                    });
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return ModeloGrupoEmpresas;
}());
exports.default = new ModeloGrupoEmpresas();
//# sourceMappingURL=systemloginrequestGroup.js.map