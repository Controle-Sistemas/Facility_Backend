"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmailService {
    constructor(client) {
        this.transporter = nodemailer_1.default.createTransport({
            host: "revendabr.theangelz.com.br",
            service: "Webmail",
            name: "Controle Sistemas",
            port: 465,
            secure: true,
            auth: {
                user: "envionotafiscal@controleautomacao.com.br",
                pass: "envionf123"
            }
        });
        this.cliente = client;
    }
    sendPasswordEmail(password) {
        const corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src="" alt="logo" style="width:90%;height:80%;">
                </th>
                <th>
                    <h2 style="color:#fff">Cadastro Efetuado</h2>
                </th>
            </tr>
            <tr bgcolor="#f0f0f0" color="#000"">
                <td>
                    <p style="margin-left:1rem"> ${this.cliente.NOMEESTABELECIMENTO} </p>
                </td>
                <td>
                    <p align="center"> ${this.cliente.CNPJ} </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${this.cliente.NOME} </h1>
                <h5> Seu cadastro no portal Controle Sistemas foi efetuado com sucesso! Abaixo estão os dados necessários para o acesso: </h5>
                <p> CNPJ: ${this.cliente.CNPJ} </p>
                <p> Senha: ${password} </p>
                <p> Acesse o portal pelo link abaixo: </p>
                <a href="https://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>
                <p> Em caso de dúvidas, entre em contato com nosso suporte <b><a href="https://wa.link/3i5b7x" style="text-decoration:none;color:#000;">clicando aqui</a></b> </p>	
                </td>
            </tr>
        </table>
        
        `; //Corpo do email
        const emailASerEnviado = {
            from: "envionotafiscal@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Senha do sistema",
            html: corpoEmail,
        };
        this.transporter.sendMail(emailASerEnviado, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }
    sendDocumentEmail(document) {
        const corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src="" alt="logo" style="width:90%;height:80%;">
                </th>
                <th>
                    <h2 style="color:#fff">Um documento foi enviado a você</h2>
                </th>
            </tr>
            <tr bgcolor="#f0f0f0" color="#000"">
                <td>
                    <p style="margin-left:1rem"> ${this.cliente.NOMEESTABELECIMENTO} </p>
                </td>
                <td>
                    <p align="center"> ${this.cliente.CNPJ} </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${this.cliente.NOME} </h1>
                <h5> O documento ${document.NOME} foi enviado para você no dia ${document.DATAINCLUSAO}</h5>
                <p> Acesse o portal pelo link abaixo para consultar ele: </p>
                <a href="https://facility.controleautomacao.com.br"> https://facility.controleautomacao.com.br </a>
                <p> Em caso de dúvidas, entre em contato com nosso suporte <b><a href="https://wa.link/3i5b7x" style="text-decoration:none;color:#000;">clicando aqui</a></b> </p>	
                </td>
            </tr>
        </table>
        
        `; //Corpo do email
        const emailASerEnviado = {
            from: "envionotafiscal@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Senha do sistema",
            html: corpoEmail,
        };
        console.log(emailASerEnviado);
        this.transporter.sendMail(emailASerEnviado, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }
    sendEmailDuvida(duvida) {
        const corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src="" alt="logo" style="width:90%;height:80%;">
                </th>
                <th>
                    <h2 style="color:#fff">Dúvida</h2>
                </th>
            </tr>
            <tr bgcolor="#f0f0f0" color="#000"">
                <td>
                    <p style="margin-left:1rem"> ${duvida.email} </p>
                </td>
                <td>

                <p> ${duvida.telefone} </p>
            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${duvida.nome} </h1>
                <h5> Sua dúvida foi enviada ao nosso suporte</h5>
                <p> ${duvida.mensagem} </p>
                <p> Acesse o portal pelo link abaixo para consultar ele: </p>
                <a href="https://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>
                <p> Em caso de demora, entre em contato com nosso suporte <b><a href="https://wa.link/3i5b7x" style="text-decoration:none;color:#000;">clicando aqui</a></b> </p>	
                </td>
            </tr>
        </table>
        
        `; //Corpo do email
        const emailASerEnviado = {
            from: "envionotafiscal@controleautomacao.com.br",
            to: duvida.email,
            subject: duvida.assunto,
            html: corpoEmail,
        };
        console.log(emailASerEnviado);
        this.transporter.sendMail(emailASerEnviado, (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }
}
exports.default = SendEmailService;
