import { AxiosInstance, AxiosResponse } from "axios";
import { Result } from "../../Core/Result";
import { IHTTPPatchClient } from "../../Domain/HTTPRequestsClient/IHTTPPatchClient";

export class HTTPAxiosPatchClient implements IHTTPPatchClient{

    constructor(
        private AxiosInstance: AxiosInstance
    ){};

    async patch(url: string,  body: object): Promise<Result<AxiosResponse>>{
        
        return await this.AxiosInstance.patch(url, body)
        .then((response) => {
            return Result.ok<AxiosResponse>(response);
        })
        .catch((error) => {
            console.log(error);
            return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
        });
    };
};
