import { FormEvent } from "react";
import submitPatch from "../../CommonHooks/Submit/submitPatch";
import submitPost from "../../CommonHooks/Submit/submitPost";
import { IHTTPPatchClient } from "../../Domain/HTTPRequestsClient/IHTTPPatchClient";
import { IHTTPPostClient } from "../../Domain/HTTPRequestsClient/IHTTPPostClient";
import { IEditableUser } from "./interface";

interface IHanldeUserSubmitProps {
    item: IEditableUser,
    httpMultipartPostClient: IHTTPPostClient,
    httpMultipartPatchClient: IHTTPPatchClient,
    httpPatchClient: IHTTPPatchClient
};

const handleUserSubmit = async (e : FormEvent, {
    item,
    httpMultipartPostClient,
    httpMultipartPatchClient,
    httpPatchClient
}: IHanldeUserSubmitProps
) => {

    e.preventDefault();

    if(!item.id){

        await submitPost({
            url: 'users', 
            item,
            httpPostClient: httpMultipartPostClient
        });

    }else{

        const { id, photo, file, ...jsonFileds } = item;

        await submitPatch({
            url: 'users',
            item: { id, ...jsonFileds },
            httpPatchClient: httpPatchClient
        });

        await submitPatch({
            url: 'users',
            item: { id, photo, file },
            httpPatchClient: httpMultipartPatchClient
        });
    };

    window.location.reload();
};


export { handleUserSubmit };