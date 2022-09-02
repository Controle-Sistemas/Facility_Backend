import aws,{S3} from 'aws-sdk'
import path from 'path';
import multerConfig from '../config/multer';
import mime from 'mime'
import fs from 'fs'
class S3Storage{
    private client:S3;

    constructor(){
        this.client = new aws.S3({
            region: "sa-east-1"
        })
    }


    async saveFile(filename:string): Promise<void> {
        const originalPath = path.resolve(multerConfig.dest)
        const ContentType = mime.getType(originalPath)

        if(!ContentType){
            throw new Error("Arquivo não encontrado")
        }

        const fileContent =  await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket:"uploadcontrolesistemas",
            Key: filename,
            Body: fileContent,
            ContentType
        }).promise()

        await fs.promises.unlink(originalPath)
    }

}


export default S3Storage