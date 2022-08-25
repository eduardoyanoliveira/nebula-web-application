import { AxiosInstance, AxiosResponse } from "axios";
import { Result } from "../../Core/Result";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";

export class HTTPAxiosPostClient implements IHTTPPostClient{

    constructor(
        private AxiosInstance: AxiosInstance
    ){};

    async post(url: string,  body: object): Promise<Result<AxiosResponse>>{

        return await this.AxiosInstance.post(url, body)
        .then((response) => {
            return Result.ok<AxiosResponse>(response);
        })
        .catch((error) => {
            console.log(error);
            return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
        });
    };

};
