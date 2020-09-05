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
    Verificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jwt = require('jsonwebtoken');
            const jwtDecode = require('jwt-decode');
            try {
                var token = jwt.verify(req.body.TokenLogin, Contrasena);
                var decoded = jwtDecode(req.body.TokenLogin);
                res.json({ Estado: "Correcto",
                    idTipoUsuario: decoded.idTipoUsuario });
            }
            catch (err) {
                res.json({ Estado: "Fallo" });
            }
        });
    }
}
exports.ObtJWTValidacionesControlador = new JWTValidacionesControlador();
