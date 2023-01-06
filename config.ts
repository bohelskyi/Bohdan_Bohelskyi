export class Config
{
    //Authorization
    public static readonly tokenType : string  = "Bearer";
    public static readonly token : string = "sl.BWZYpzXCOxb49hghh6P6HQDsbv_Q-nGPJvtlCYUbTMwr4f14SrHxS5bCg68Hw1mYVAaTwO3GXL8M601c2c4ushiZxYwE4ErfRKr9bKm8o0jo_7lxQ5ELOXGG5rpmqMWe6NDfhMqa";

    //File
    public static readonly cloudPath : string = "/WebAPI/Batman";
    public static readonly localPath : string = "/resources/Batman";

    //Upload
    public static readonly uploadFileURL : string = "https://content.dropboxapi.com/2/files/upload";

    //Get file metadata
    public static readonly getFileMetadataURL : string  = "https://api.dropboxapi.com/2/files/get_metadata";

    //Delete file
    public static readonly deleteFileURL : string  = "https://api.dropboxapi.com/2/files/delete_v2";
}