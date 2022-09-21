import { FormEvent } from "react";
import submitPatch from "../../CommonHooks/submitPatch";
import submitPost from "../../CommonHooks/submitPost";
import { ISubject } from "../../Domain/Entities/ISubject";
import { IHTTPPatchClient } from '../../Domain/HTTPRequestsClient/IHTTPPatchClient';
import { IHTTPPostClient } from '../../Domain/HTTPRequestsClient/IHTTPPostClient';

interface ISubmitSubjectProps {
    subject: ISubject,
    httpPostClient: IHTTPPostClient,
    httpPatchClient: IHTTPPatchClient
};

const submitSubject = async (e : FormEvent, { subject, httpPatchClient, httpPostClient} : ISubmitSubjectProps ) => {

    e.preventDefault();

    if(subject.id){
        await submitPatch({ url: 'subjects', item: subject, httpPatchClient });
    }else{
        await submitPost({ url: 'subjects', item: subject, httpPostClient });
    };

    window.location.reload();
};

export { submitSubject };