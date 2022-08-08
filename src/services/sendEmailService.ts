import nodemailer from 'nodemailer'; 
import { SysLoginType } from '../types';

class SendEmailService {
    transporter: any;
    cliente: SysLoginType;

    constructor(client?: any) {
        this.transporter = nodemailer.createTransport({ //Configuração do servidor de envio de email
            host: "revendabr.theangelz.com.br",
            service: "Webmail",
            name: "Controle Sistemas",
            port: 465,
            secure: true,
            auth: { //Dados de autenticação do servidor de envio de email
                user: "envionotafiscal@controleautomacao.com.br",
                pass: "envionf123"
            }
        });

        this.cliente = client;
        
    }
            


    sendPasswordEmail(password: string) { // Dados do cliente e a senha gerada são recebidos por parametro
    
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
                <a href="#"> dominio </a>
                <p> Em caso de dúvidas, entre em contato com nosso suporte <b><a href="https://wa.link/3i5b7x" style="text-decoration:none;color:#000;">clicando aqui</a></b> </p>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "envionotafiscal@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Senha do sistema",
            html: corpoEmail,
        };
    
        this.transporter.sendMail(emailASerEnviado,  (error: any, info: { response: string; }) => { //Envia o email
            if (error) {
                console.log(error);
            } else {
                console.log(`Email enviado para ${this.cliente.EMAIL}:` + info.response);
            }
        });
        this.transporter.close(); //Fecha o servidor de envio de email
    
    }

    sendDocumentEmail(document:any) { 

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
                <a href="#"> dominio </a>
                <p> Em caso de dúvidas, entre em contato com nosso suporte <b><a href="https://wa.link/3i5b7x" style="text-decoration:none;color:#000;">clicando aqui</a></b> </p>	
                </td>
            </tr>
        </table>
        
        ` //Corpo do email
    
        
    
        const emailASerEnviado = { //Dados do email a ser enviado
            from: "envionotafiscal@controleautomacao.com.br",
            to: this.cliente.EMAIL,
            subject: "Senha do sistema",
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

