import S3Storage from '../utils/S3Storage'

class DeleteImageService {

    async execute(files:string[],route:string): Promise<void> {
        const s3Storage = new S3Storage();
        files.forEach(async(filename:string) => {
            console.log(filename)
            await s3Storage.deleteFile(filename,route)
        })
    }



}


export default DeleteImageService