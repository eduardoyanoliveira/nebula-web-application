import { FormEvent } from "react";
import handleSubmit from "../../CommonHooks/handleSubmit";
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

    await handleSubmit<ISubject>({ url: 'subjects', item: subject, httpPatchClient, httpPostClient });

    window.location.reload();
};

export { submitSubject };