import aws,{S3} from 'aws-sdk'
import path from 'path';
import multerConfig from '../config/multer';
import mime from 'mime'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()
class S3Storage{
    private client:S3;

    constructor(){
        this.client = new aws.S3({
            region: "sa-east-1"
        })
    }


    async saveFile(filename:string,route:string): Promise<void> {
        const originalPath = path.resolve(multerConfig.dest,filename)
        const ContentType = mime.getType(originalPath)
        if(!ContentType){
            throw new Error("Arquivo não encontrado")
        }

        const fileContent =  await fs.promises.readFile(originalPath);
        
        this.client.putObject({
            Bucket:`uploadcontrolesistemas/${route}`,
            Key: filename,
            Body: fileContent,
            ACL:"public-read",
            ContentType
        }).promise()

        await fs.promises.unlink(originalPath)
    }

    async deleteFile(filename:string,route:string): Promise<void> {
        await this.client.deleteObject({
            Bucket:`uploadcontrolesistemas/${route}`,
            Key: filename
        }).promise()
    }

}


export default S3Storage