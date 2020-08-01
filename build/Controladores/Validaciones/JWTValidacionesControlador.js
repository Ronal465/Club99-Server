"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtJWTValidacionesControlador = void 0;
const Contrasena = "Club99LoginRegister";
class JWTValidacionesControlador {
    // Numero 16
    GetCrearTokenLogin(result) {
        var jwt = require('jsonwebtoken');
        var bodyParser = require('body-parser');
        var tokenData = result;
        var token = jwt.sign(tokenData, Contrasena, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });
        return {
            Estado: "Correcto",
            TokenLogin: token
        };
    }
    ValidarToken(TokenLogin) {
        var jwt = require('jsonwebtoken');
        var bodyParser = require('body-parser');
        var token = TokenLogin.TokenLogin.headers['authorization'];
        if (!token) {
            return {
                Estado: "Fallo"
            };
        }
        token = token.replace('Bearer ', '');
        jwt.verify(token, Contrasena, function (err, token) {
            if (err) {
                return {
                    Estado: "Fallo"
                };
            }
            else {
                return {
                    Estado: "Correcto",
                    TokenLogin: token
                };
            }
        });
    }
}
exports.ObtJWTValidacionesControlador = new JWTValidacionesControlador();
