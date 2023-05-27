"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var SendEmailService = /** @class */ (function () {
    /*
        TIPOS
        0 - NENHUM
        1 - CLIENTE
        2 - INTERNO
    */
    function SendEmailService(tipo, userData) {
        this.logoPath = "http://facility.controleautomacao.com.br/static/media/logoBranca.7d5dfffbd546d74fdeaa.png";
        this.transporter = nodemailer_1.default.createTransport({
            host: "revendabr.theangelz.com.br",
            service: "Webmail",
            name: "Controle Sistemas",
            port: 465,
            secure: true,
            auth: {
                user: "chamados@controleautomacao.com.br",
                // user: newpartner@controleautomacao.com.br
                pass: "controlechamados01"
            }
        });
        if (tipo === 1) {
            this.cliente = userData;
        }
        else if (tipo === 2) {
            this.interno = userData;
        }
    }
    SendEmailService.prototype.sendPasswordEmail = function (password) {
        var _this = this;
        this.transporter.auth = {
            user: "newpartner@controleautomacao.com.br",
            pass: "controleparceiro01"
        };
        var corpoEmail;
        if (this.cliente) {
            corpoEmail = "\n    \n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n                <th>\n                    <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n                </th>\n                <th>\n                    <h2 style=\"color:#fff\">Cadastro Efetuado</h2>\n                </th>\n            </tr>\n            <tr bgcolor=\"#f0f0f0\" color=\"#000\"\">\n                <td>\n                    <p style=\"margin-left:1rem\"> ").concat(this.cliente.NOMEESTABELECIMENTO, " </p>\n                </td>\n                <td>\n                    <p align=\"center\"> ").concat(this.cliente.CNPJ, " </p>\n                </td>\n            </tr>\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(this.cliente.NOME, " </h1>\n                <h5> Seu cadastro no portal Controle Sistemas foi efetuado com sucesso! Abaixo est\u00E3o os dados necess\u00E1rios para o acesso: </h5>\n                <p> CNPJ: ").concat(this.cliente.CNPJ, " </p>\n                <p> Senha: ").concat(password, " </p>\n                <p> Acesse o portal pelo link abaixo: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> facility.controleautomacao.com.br </a>\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        }
        else {
            corpoEmail = "\n    \n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n            <th>\n                <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n            </th>\n            <th>\n                <h2 style=\"color:#fff\">Cadastro Efetuado</h2>\n            </th>\n            </tr>\n\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(this.interno.NOME, " </h1>\n                <h5> Seu cadastro no portal Controle Sistemas foi efetuado com sucesso! Abaixo est\u00E3o os dados necess\u00E1rios para o acesso: </h5>\n                <p> Usu\u00E1rio: ").concat(this.interno.USUARIO, " </p>\n                <p> Senha: ").concat(password, " </p>\n                <p> Acesse o portal pelo link abaixo: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> facility.controleautomacao.com.br </a>\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        }
        var emailASerEnviado = {
            from: "newpartner@controleautomacao.com.br",
            to: this.cliente ? this.cliente.EMAIL : this.interno.EMAIL,
            subject: "Senha do sistema",
            html: corpoEmail,
            attachments: []
        };
        this.transporter.sendMail(emailASerEnviado, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email enviado para ".concat(_this.cliente ? _this.cliente.EMAIL : _this.interno.EMAIL, ":") + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    };
    SendEmailService.prototype.sendDocumentEmail = function (document) {
        var _this = this;
        this.transporter.auth = {
            user: "newpartner@controleautomacao.com.br",
            pass: "controleparceiro01"
        };
        var corpoEmail = "\n    \n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n                <th>\n                    <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n                </th>\n                <th>\n                    <h2 style=\"color:#fff\">Um documento foi enviado a voc\u00EA</h2>\n                </th>\n            </tr>\n            <tr bgcolor=\"#f0f0f0\" color=\"#000\"\">\n                <td>\n                    <p style=\"margin-left:1rem\"> ").concat(this.cliente.NOMEESTABELECIMENTO, " </p>\n                </td>\n                <td>\n                    <p align=\"center\"> ").concat(this.cliente.CNPJ, " </p>\n                </td>\n            </tr>\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(this.cliente.NOME, " </h1>\n                <h5> O documento ").concat(document.NOME, " foi enviado para voc\u00EA no dia ").concat(document.DATAINCLUSAO, "</h5>\n                <p> Acesse o portal pelo link abaixo para consultar ele: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> https://facility.controleautomacao.com.br </a>\t\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        var emailASerEnviado = {
            from: "newpartner@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Novo documento",
            html: corpoEmail,
        };
        console.log(emailASerEnviado);
        this.transporter.sendMail(emailASerEnviado, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email enviado para ".concat(_this.cliente.EMAIL, ":") + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    };
    SendEmailService.prototype.sendEmailDuvida = function (duvida) {
        var _this = this;
        this.transporter.auth = {
            user: "chamados@controleautomacao.com.br",
            pass: "controlechamados01"
        };
        var corpoEmail = "\n    \n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n                <th>\n                    <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n                </th>\n                <th>\n                    <h2 style=\"color:#fff\">D\u00FAvida</h2>\n                </th>\n            </tr>\n            <tr bgcolor=\"#f0f0f0\" color=\"#000\"\">\n                <td>\n                    <p style=\"margin-left:1rem\"> ").concat(duvida.email, " </p>\n                </td>\n                <td>\n\n                <p> ").concat(duvida.telefone, " </p>\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(duvida.nome, " </h1>\n                <h5> Sua d\u00FAvida foi enviada ao nosso suporte</h5>\n                <p> ").concat(duvida.mensagem, " </p>\n                <p> Acesse o portal pelo link abaixo para consultar ele: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> facility.controleautomacao.com.br </a>\t\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        var emailASerEnviado = {
            from: "chamados@controleautomacao.com.br",
            to: duvida.email,
            subject: duvida.assunto,
            html: corpoEmail,
        };
        console.log(emailASerEnviado);
        this.transporter.sendMail(emailASerEnviado, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email enviado para ".concat(_this.cliente.EMAIL, ":") + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    };
    SendEmailService.prototype.sendEmailChamado = function (chamado) {
        var _this = this;
        var corpoEmail = "\n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n                <th>\n                    <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n                </th>\n                <th>\n                    <h2 style=\"color:#fff\">D\u00FAvida</h2>\n                </th>\n            </tr>\n            <tr bgcolor=\"#f0f0f0\" color=\"#000\"\">\n                <td>\n                    <p style=\"margin-left:1rem\"> ").concat(this.interno.EMAIL, " </p>\n                </td>\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(this.interno.NOME, " </h1>\n                <h5> Voc\u00EA tem recebeu um novo chamado</h5>\n                <h3> ").concat(chamado.TITULO, " </h3>\n                <p> Acesse o portal pelo link abaixo para consultar ele: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> facility.controleautomacao.com.br </a>\t\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        var emailASerEnviado = {
            from: "chamados@controleautomacao.com.br",
            to: this.interno.EMAIL,
            subject: "Novo chamado",
            html: corpoEmail,
        };
        this.transporter.sendMail(emailASerEnviado, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email enviado para ".concat(_this.interno.EMAIL, ":") + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    };
    SendEmailService.prototype.sendEmailChamadosRecorrentes = function (chamados) {
        var _this = this;
        this.transporter.auth = {
            user: "chamados@controleautomacao.com.br",
            pass: "controlechamados01"
        };
        var corpoEmail = "\n        <table style=\"width:100%\" cellpadding=\"0\" cellspacing=\"0\">\n            <tr bgcolor=\"#003775\">\n                <th>\n                    <img src=".concat(this.logoPath, " alt=\"logo\" style=\"width:25%; margin-left:10px\">\n                </th>\n                <th>\n                    <h2 style=\"color:#fff\">D\u00FAvida</h2>\n                </th>\n            </tr>\n            <tr bgcolor=\"#f0f0f0\" color=\"#000\"\">\n                <td>\n                    <p style=\"margin-left:1rem\"> ").concat(this.interno.EMAIL, " </p>\n                </td>\n            <tr bgcolor=\"#fff\">\n                <td colSpan=\"2\">\n    \n                <h1> Ol\u00E1, ").concat(this.interno.NOME, " </h1>\n                <h5> Voc\u00EA tem ").concat(chamados.length, " chamados recorrentes que devem ser efetuados</h5>\n                <p> Acesse o portal pelo link abaixo para consultar ele: </p>\n                <a href=\"http://facility.controleautomacao.com.br\"> facility.controleautomacao.com.br </a>\t\n                </td>\n            </tr>\n        </table>\n        \n        "); //Corpo do email
        var emailASerEnviado = {
            from: "chamados@controleautomacao.com.br",
            to: this.interno.EMAIL,
            subject: "Novo chamado",
            html: corpoEmail,
        };
        console.log(emailASerEnviado);
        this.transporter.sendMail(emailASerEnviado, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email enviado para ".concat(_this.cliente.EMAIL, ":") + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    };
    return SendEmailService;
}());
exports.default = SendEmailService;
//# sourceMappingURL=sendEmailService.js.map