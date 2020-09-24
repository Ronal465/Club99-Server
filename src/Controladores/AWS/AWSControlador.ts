import { Request, Response } from 'express';
import pool from '../../database';

const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIAJAIRCPM3NJTDXOHQ",
    secretAccessKey: "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"
});

const myKey = 'Video1.mp4';

class AWSControlador {



    // Numero 1
    public async SubirVideo(req: any, res: Response) {

        console.log(req.file);
        // res.json({ messaje: "sisas"})

        //for text file
        //fs.readFile('demo.txt', function (err, data) {
        //for Video file
        fs.readFile(req.file.path, function (err: any, data1: any) {
            //for image file				
            // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
            if (err) { throw err; }

            console.log(data1);

            const params = { Bucket: "club99/VideosCursos", Key: myKey, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };



            s3.putObject(params, function (err: any, data: any) {

                if (err) {

                    console.log(err)

                } else {
                    const params2 = { Bucket: "club99/VideosCursos", Key: myKey };
                    s3.getSignedUrlPromise( 'getObject' ,params2, function(err: any, data: any) {
                       
                        // Handle any error and exit
                        if (err)
                            return err;
                
                
                        var Link="";
                        var LinkFinal=""
                
                        for(var i = 0;i <data.length;i++){
                          var Letra=  data.charAt(i);
                          Link+= Letra;
                            if(Letra == "."){
                                if(data.charAt(i+1) == "m"){
                                    if(data.charAt(i+2) == "p"){
                                        if(data.charAt(i+3) == "4"){
                                            Link+= "mp4";
                                            LinkFinal= Link;
                                            res.json({link: LinkFinal})
                                        }
                                    }
                                }
                            }
                            
                        }
                
                       
                
                    });
                        

                    console.log("Successfully uploaded data to myBucket/myKey");

                }

            });

        });

    }

    public async SubirImg(req: any, res: Response) {

        console.log(req.file);
        // res.json({ messaje: "sisas"})

        //for text file
        //fs.readFile('demo.txt', function (err, data) {
        //for Video file
        fs.readFile(req.file.path, function (err: any, data1: any) {
            //for image file				
            // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
            if (err) { throw err; }

            console.log(data1);

            const params = { Bucket:  "club99/ImagenesCursos", Key: req.file.originalname, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };



            s3.putObject(params, function (err: any, data: any) {

                if (err) {

                    console.log(err)

                } else {
                    const params2 = { Bucket:  "club99/ImagenesCursos", Key: req.file.originalname };
                    s3.getSignedUrlPromise( 'getObject' ,params2, function(err: any, data: any) {

                        // Handle any error and exit
                        if (err)
                            return err;
                
                
                        var Link="";
                        var LinkFinal=""
                
                        for(var i = 0;i <data.length;i++){
                          var Letra=  data.charAt(i);
                          Link+= Letra;
                            if(Letra == "."){
                                if(data.charAt(i+1) == "p"){
                                    if(data.charAt(i+2) == "n"){
                                        if(data.charAt(i+3) == "g"){
                                            Link+= "png";
                                            LinkFinal= Link;
                                            res.json({link: LinkFinal})
                                        }
                                    }
                                }
                            }
                            
                        }
                
                       
                
                    });
                        

                    console.log("Successfully uploaded data to myBucket/myKey");

                }

            });

        });

    }




}

export const ObtAWSControlador = new AWSControlador();