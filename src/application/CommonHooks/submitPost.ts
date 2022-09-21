import { IHTTPPostClient } from "../Domain/HTTPRequestsClient/IHTTPPostClient";

interface ISubmitPostProps<T>{
    url: string,
    item: T,
    httpPostClient : IHTTPPostClient
};

async function submitPost<T extends {}>(
    {
        url,
        item, 
        httpPostClient 
    } : ISubmitPostProps<T>
){

    const response = await httpPostClient.post(url, item);

    if(response.isFailure){
        return alert(response.error)
    };

};

export default submitPost;