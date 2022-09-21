import { IHTTPPatchClient } from "../Domain/HTTPRequestsClient/IHTTPPatchClient";

interface ISubmitPatchProps<T>{
    url: string,
    item: T,
    httpPatchClient: IHTTPPatchClient,
};

async function submitPatch<T extends { id?: string }>(
    {
        url,
        item, 
        httpPatchClient,
    } : ISubmitPatchProps<T>
){
    const response = await httpPatchClient.patch(`${url}/${item.id}`, item);

    if(response.isFailure){
        return alert(response.error)
    };

};

export default submitPatch;