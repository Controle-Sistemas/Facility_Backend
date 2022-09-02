import S3Storage from '../utils/S3Storage'


class UploadImageService {

    async execute(files:Express.Multer.File[],route:string): Promise<void> {
        const s3Storage = new S3Storage();
        files.forEach(async(file:Express.Multer.File) => {
            await s3Storage.saveFile(file.filename,route)
        })
    }



}


export default UploadImageService