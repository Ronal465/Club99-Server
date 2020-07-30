import { Request, Response } from 'express';
import pool from '../../database';







class EnviarCorreoController {

    private Correo = "proyectocelutel@gmail.com";
    private Contrasena = "Celutel2019*"
    

    public async  ValidarCorreo(req: Request, res: Response) {

  
  
        var nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: this.Correo,
                pass: this.Contrasena,
            }
        });
        // setup e-mail data with unicode symbols
        const { CorreoElectronico } = req.params;


        var mailOptions = {
            from:  this.Correo, // sender address
            to: '' + CorreoElectronico, // list of receivers
            subject: 'Objetivo ', // Subject line
            text: 'Texto De Ejemplo', // plaintext body
            html: `<p>Su Nueva Contraseña Es:</p><p></p>`  // html body
        };


        res.json({ Message: 'Correo Enviado' });
        // send mail with defined transport object
        await transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });


    }

    public async  RecuperarContraseña(req: Request, res: Response) {

        var StrContrasenaNueva = req.body.StrContrasenaNueva;
        var nodemailer = require('nodemailer');

        // create reusable transporter object using the default SMTP transport
        // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "",
                pass: ""
            }
        });
        // setup e-mail data with unicode symbols
        const { Correo } = req.params;

        var mailOptions = {
            from: 'proyectocelutel@gmail.com', // sender address
            to: '' + Correo, // list of receivers
            subject: 'Objetivo ', // Subject line
            text: 'Texto De Ejemplo', // plaintext body
            html: `<p>Su Nueva Contraseña Es:</p><p>${StrContrasenaNueva}</p>`  // html body
        };


        res.json({ Message: 'Correo Enviado' });
        // send mail with defined transport object
        await transporter.sendMail(mailOptions, function (error: any, info: any) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);

        });


    }

}

export const ObtEnviarCorreoController = new EnviarCorreoController();