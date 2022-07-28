import { AxiosInstance, AxiosResponse } from "axios";
import { Result } from "../../Core/Result";
import { IHTTPGetClient } from "../../Domain/HTTPRequestsClient/IHTTPGetClient";

export class HTTPAxiosGetClient implements IHTTPGetClient{

    constructor(
        private AxiosInstance: AxiosInstance
    ){};

    async get(url: string, finallyFn?: Function): Promise<Result<AxiosResponse>>{
        
        return await this.AxiosInstance.get(url)
        .then((response) => {
            return Result.ok<AxiosResponse>(response);
        })
        .catch((error) => {
            console.log(error);
            return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
        })
        .finally(() => {
            // With a finnaly function is passed in the parameters, it gonna be executed. 
            finallyFn && finallyFn();
        });
    };

};
