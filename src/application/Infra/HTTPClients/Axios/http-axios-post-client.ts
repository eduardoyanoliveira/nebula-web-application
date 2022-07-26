import { AxiosInstance, AxiosResponse } from "axios";
import { Result } from "../../../core/Result";
import { IHTTPPostClient } from "../../interfaces/IHTTPPostClient";

export class HTTPAxiosPostClient<ThisBody> implements IHTTPPostClient<ThisBody, AxiosResponse>{

    constructor(
        private AxiosInstance: AxiosInstance
    ){};

    async post(url: string,  body: ThisBody): Promise<Result<AxiosResponse>>{
        
        return await this.AxiosInstance.post(url, body)
        .then((response) => {
            return Result.ok<AxiosResponse>(response);
        })
        .catch((error) => {
            return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
        });
    };

};

// class HTTPAxiosPostClient<Body> implements IHTTPPostClient<Body, AxiosResponse>{

//     constructor(
//         private AxiosInstance: AxiosInstance
//     ){};

//     async post(url: string,  body: Body): Promise<Result<AxiosResponse>>{
        
//         return await this.AxiosInstance.post(url, body)
//         .then((response) => {
//             return Result.ok<AxiosResponse>(response);
//         })
//         .catch((error) => {
//             return Result.fail<AxiosResponse>(JSON.parse(error.request.responseText).error);
//         });
//     };

// };


// export function httpAxiosPostClientFactory<Body>(axiosInstance: AxiosInstance){
//     return new HTTPAxiosPostClient<Body>(axiosInstance);
// }