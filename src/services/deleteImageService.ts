import S3Storage from '../utils/S3Storage'

class DeleteImageService {

    async execute(files:string,route:string): Promise<void> {
        const s3Storage = new S3Storage();
        /**
         * files.forEach(async(filename:string) => {
            console.log(filename,route)
            await s3Storage.deleteFile(filename,route)
        })
         */
        console.log(files,route)
        await s3Storage.deleteFile(files,route)
    }



}


export default DeleteImageService