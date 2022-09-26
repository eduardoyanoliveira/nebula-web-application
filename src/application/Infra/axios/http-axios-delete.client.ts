import { AxiosInstance, AxiosResponse } from "axios";
import { Result } from "../../Core/Result";
import { IHTTPDeleteClient } from "../../Domain/HTTPRequestsClient/IHTTPDeleteClient";

export class HTTPAxiosDeleteClient implements IHTTPDeleteClient{

    constructor(
        private AxiosInstance: AxiosInstance
    ){};

    async delete(url: string, id: string): Promise<Result<AxiosResponse>>{
        
        return await this.AxiosInstance.delete(url + id)
        .then((response) => {
            return Result.ok<AxiosResponse>(response);
        })
        .catch((error) => {
            console.log(error);
            return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
        });
    };

};
