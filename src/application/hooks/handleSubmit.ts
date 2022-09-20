import { IHTTPPatchClient } from "../Domain/HTTPRequestsClient/IHTTPPatchClient";
import { IHTTPPostClient } from "../Domain/HTTPRequestsClient/IHTTPPostClient";

interface IHandleSubmitProps<T>{
    url: string,
    item: T,
    httpPatchClient: IHTTPPatchClient,
    httpPostClient : IHTTPPostClient
};

async function handleSubmit<T extends { id?: string }>(
    {
        url,
        item, 
        httpPatchClient,
        httpPostClient 
    } : IHandleSubmitProps<T>
){

    if(!item.id){
        const response = await httpPostClient.post(url, item);

        if(response.isFailure){
        return alert(response.error)
        };
    }else{
        const response = await httpPatchClient.patch(`${url}/${item.id}`, item);

        if(response.isFailure){
        return alert(response.error)
        };
    };
};

export default handleSubmit;