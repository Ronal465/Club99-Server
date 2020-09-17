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
exports.ObtAWSControlador = void 0;
const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIAJAIRCPM3NJTDXOHQ",
    secretAccessKey: "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"
});
const myBucket = 'club99/VideosCursos';
const myKey = 'Video1.mp4';
class AWSControlador {
    // Numero 1
    SubirVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            // res.json({ messaje: "sisas"})
            //for text file
            //fs.readFile('demo.txt', function (err, data) {
            //for Video file
            fs.readFile(req.file.path, function (err, data1) {
                //for image file				
                // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
                if (err) {
                    throw err;
                }
                console.log(data1);
                const params = { Bucket: myBucket, Key: myKey, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        const params = { Bucket: myBucket, Key: myKey };
                        const file = require('fs').createWriteStream(req.file.path);
                        s3.getObject(params).createReadStream().pipe(file).on('error', function (err) {
                            // capture any errors that occur when writing data to the file
                            console.error('File Stream:', err);
                        }).on('close', function (dataurl) {
                            console.log(dataurl);
                            console.log('Done.');
                            res.json({ message: "ok" });
                        });
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            });
        });
    }
}
exports.ObtAWSControlador = new AWSControlador();
