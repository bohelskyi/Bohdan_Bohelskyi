import {RequestBuilder} from "./requestBuilder";
import axios, {AxiosResponse} from "axios";

export class RequestManager
{
    private _builder: RequestBuilder;

    constructor(builder: RequestBuilder) {
        this._builder = builder;
    }

    public build(): object {
        this._builder.setMethod();
        this._builder.setURL();
        this._builder.setHeaders();
        this._builder.setBody()
        return this._builder.request;
    }

    public send(): Promise<AxiosResponse>{
        return axios(this.build());
    }
}
