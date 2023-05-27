import nodemailer from 'nodemailer'; 
import { SysLoginType } from '../types';
import path from 'path';

class SendEmailService {
    transporter: any;
    cliente: SysLoginType | any;
    interno: any;

    /*
        TIPOS
        0 - NENHUM
        1 - CLIENTE
        2 - INTERNO
    */

    constructor(tipo:number,userData?: any) {
        this.transporter = nodemailer.createTransport({ //Configuração do servidor de envio de email
            host: "revendabr.theangelz.com.br",
            service: "Webmail",
            name: "Controle Sistemas",
            port: 465,
            secure: true,
            auth: { //Dados de autenticação do servidor de envio de email
                user: "chamados@controleautomacao.com.br", 
                // user: newpartner@controleautomacao.com.br
                pass: "controlechamados01"
            }
        });

        if(tipo === 1){
            this.cliente = userData;
        } else if(tipo === 2){
            this.interno = userData
        }
        
    }
            
    
    logoPath = "http://facility.controleautomacao.com.br/static/media/logoBranca.7d5dfffbd546d74fdeaa.png";

    sendPasswordEmail(password: string) { // Dados do cliente e a senha gerada são recebidos por parametro

        this.transporter.auth = {
            user: "newpartner@controleautomacao.com.br",
            pass: "controleparceiro01"
        }
        let corpoEmail:string;
        if(this.cliente){
            corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
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
                <a href="http://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
        } else {
            corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
            <th>
                <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
            </th>
            <th>
                <h2 style="color:#fff">Cadastro Efetuado</h2>
            </th>
            </tr>

            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${this.interno.NOME} </h1>
                <h5> Seu cadastro no portal Controle Sistemas foi efetuado com sucesso! Abaixo estão os dados necessários para o acesso: </h5>
                <p> Usuário: ${this.interno.USUARIO} </p>
                <p> Senha: ${password} </p>
                <p> Acesse o portal pelo link abaixo: </p>
                <a href="http://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
        }
        
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "newpartner@controleautomacao.com.br",
            to: this.cliente ? this.cliente.EMAIL : this.interno.EMAIL,
            subject: "Senha do sistema",
            html: corpoEmail,
            attachments: []
        };
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.cliente ? this.cliente.EMAIL : this.interno.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    
    }

    sendDocumentEmail(document:any) { 
        
        this.transporter.auth = {
            user: "newpartner@controleautomacao.com.br",
            pass: "controleparceiro01"
        }
        const corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
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
                <a href="http://facility.controleautomacao.com.br"> https://facility.controleautomacao.com.br </a>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "newpartner@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Novo documento",
            html: corpoEmail,
        };
        console.log(emailASerEnviado)
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    
    }

    sendEmailDuvida(duvida:any){
        
          this.transporter.auth = {
            user: "chamados@controleautomacao.com.br",
            pass: "controlechamados01"
        }
        const corpoEmail = `
    
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
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
                <a href="http://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "chamados@controleautomacao.com.br",
            to: duvida.email,
            subject: duvida.assunto,
            html: corpoEmail,
        };
        console.log(emailASerEnviado)
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }

    sendEmailChamado(chamado:any){
        const corpoEmail = `
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
                </th>
                <th>
                    <h2 style="color:#fff">Dúvida</h2>
                </th>
            </tr>
            <tr bgcolor="#f0f0f0" color="#000"">
                <td>
                    <p style="margin-left:1rem"> ${this.interno.EMAIL} </p>
                </td>
            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${this.interno.NOME} </h1>
                <h5> Você tem recebeu um novo chamado</h5>
                <h3> ${chamado.TITULO} </h3>
                <p> Acesse o portal pelo link abaixo para consultar ele: </p>
                <a href="http://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "chamados@controleautomacao.com.br",
            to: this.interno.EMAIL,
            subject: "Novo chamado",
            html: corpoEmail,
        };
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.interno.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }

    sendEmailChamadosRecorrentes(chamados:any){
          this.transporter.auth = {
            user: "chamados@controleautomacao.com.br",
            pass: "controlechamados01"
        }
        const corpoEmail = `
        <table style="width:100%" cellpadding="0" cellspacing="0">
            <tr bgcolor="#003775">
                <th>
                    <img src=${this.logoPath} alt="logo" style="width:25%; margin-left:10px">
                </th>
                <th>
                    <h2 style="color:#fff">Dúvida</h2>
                </th>
            </tr>
            <tr bgcolor="#f0f0f0" color="#000"">
                <td>
                    <p style="margin-left:1rem"> ${this.interno.EMAIL} </p>
                </td>
            <tr bgcolor="#fff">
                <td colSpan="2">
    
                <h1> Olá, ${this.interno.NOME} </h1>
                <h5> Você tem ${chamados.length} chamados recorrentes que devem ser efetuados</h5>
                <p> Acesse o portal pelo link abaixo para consultar ele: </p>
                <a href="http://facility.controleautomacao.com.br"> facility.controleautomacao.com.br </a>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "chamados@controleautomacao.com.br",
            to: this.interno.EMAIL,
            subject: "Novo chamado",
            html: corpoEmail,
        };
        console.log(emailASerEnviado)
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    }




}

export default SendEmailService;

