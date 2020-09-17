import { Request, Response } from 'express';
import pool from '../../database';

const AWS = require('aws-sdk');
const fs =  require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIAJAIRCPM3NJTDXOHQ",
    secretAccessKey: "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"
  });
const myBucket = 'club99/VideosCursos';
const myKey = 'Video1.mp4';

class AWSControlador {



    // Numero 1
    public async SubirVideo(req: any, res: Response ) {

        console.log(req.file);
       // res.json({ messaje: "sisas"})

        //for text file
        //fs.readFile('demo.txt', function (err, data) {
        //for Video file
        fs.readFile(req.file.path, function (err:any,data1:any) {
        //for image file				
        // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
          if (err) { throw err; }
        
            console.log(data1);
        
             const params = {Bucket: myBucket, Key: myKey, Body: data1 ,ContentType :req.file.mimetype,ACL: 'public-read' };
        
            

             s3.putObject(params, function(err: any, data: any) {
        
                 if (err) {
        
                     console.log(err)
        
                 } else {

                    const params = {Bucket: myBucket, Key: myKey};
                    const file = require('fs').createWriteStream(req.file.path);
   
                    s3.getObject(params).createReadStream().pipe(file).on('error', function(err:any) {
                        // capture any errors that occur when writing data to the file
                        console.error('File Stream:', err);
                    }).on('close', function(dataurl:any) {

                        console.log(dataurl);
                        console.log('Done.');
                        res.json({message:"ok"});
                    });

                     
                     console.log("Successfully uploaded data to myBucket/myKey");
        
                 }
        
              });
        
        });

    }






}

export const ObtAWSControlador = new AWSControlador();