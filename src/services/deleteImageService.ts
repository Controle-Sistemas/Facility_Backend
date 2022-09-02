import S3Storage from '../utils/S3Storage'

class DeleteImageService {

    async execute(files:string[],route:string): Promise<void> {
        const s3Storage = new S3Storage();
        console.log(files)
        files.forEach(async(filename:string) => {
            await s3Storage.deleteFile(filename,route)
        })
    }



}


export default DeleteImageService