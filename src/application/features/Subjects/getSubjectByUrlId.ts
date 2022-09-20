import { ISubject } from "../../Domain/Entities/ISubject";

function getSubjectByUrlId(subjects: ISubject[]){

    const urlStrings = window.location.toString().split('/');
    const id = urlStrings.at(-1)

    const subject = subjects?.find(item => item.id === id);

    return { subject };
};

export { getSubjectByUrlId };

