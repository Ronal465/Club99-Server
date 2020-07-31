"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Auth {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
    }
}
const Authh = new Auth();
exports.default = Authh.router;
