import {Config} from "../config";


export abstract class RequestBuilder
{
    public abstract setURL(): void ;
    public abstract setMethod(): void ;
    public abstract setAuthorization(): void ;
    public abstract setHeaders(): void ;
    public abstract setBody(): void ;
    public abstract get request(): object;
}


export class UploadFile extends RequestBuilder {
    private _request: {[k: string]: any};

    constructor() {
        super();
        this._request = {
            method: '',
            url: '',
            headers: {},
            data: {}
        }
    }

    get request() {
        return this._request;
    }

    setMethod(): void {
        this._request['method'] = 'post';
    }

    setURL(): void {
        this._request['url'] = Config.uploadFileURL;
    }

    public override setAuthorization(): void {
        this._request['headers']['Authorization'] = Config.tokenType + " " + Config.token;
    }

    public override setHeaders(): void {
        this._request['headers']['Content-Type'] = 'application/octet-stream';
        this.setAuthorization();
        this._request['headers']['Dropbox-API-Arg'] = `{"mode":"add","path":"${Config.cloudPath}","mute":false,"autorename":true}`;

    }

    public override setBody(): void {
        this._request["data"]["binary"] = ".." + Config.localPath;
    }
}


export class GetFileMetadata extends RequestBuilder {
    private _request: {[k: string]: any};

    constructor() {
        super();
        this._request = {
            method: '',
            url: '',
            headers: {},
            data: {}
        }
    }

    get request() {
        return this._request;
    }

    setMethod(): void {
        this._request['method'] = 'post';
    }

    setURL(): void {
        this._request['url'] = Config.getFileMetadataURL;
    }

    public override setAuthorization(): void {
        this._request['headers']['Authorization'] = Config.tokenType + " " + Config.token;
    }

    public override setHeaders(): void {
        this._request['headers']['Content-Type'] = 'application/json';
        this.setAuthorization();
    }

    public override setBody(): void {
        this._request["data"]["path"] = Config.cloudPath;
    }
}


export class DeleteFile extends RequestBuilder {
    private _request: {[k: string]: any};

    constructor() {
        super();
        this._request = {
            method: '',
            url: '',
            headers: {},
            data: {}
        }
    }

    get request() {
        return this._request;
    }

    setMethod(): void {
        this._request['method'] = 'post';
    }

    setURL(): void {
        this._request['url'] = Config.deleteFileURL;
    }

    public override setAuthorization(): void {
        this._request['headers']['Authorization'] = Config.tokenType + " " + Config.token;
    }

    public override setHeaders(): void {
        this._request['headers']['Content-Type'] = 'application/json';
        this.setAuthorization();
    }

    public override setBody(): void {
        this._request["data"]["path"] = Config.cloudPath;
    }
}