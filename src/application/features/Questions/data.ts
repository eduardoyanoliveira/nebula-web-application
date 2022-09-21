import { IQuestion } from "../../Domain/Entities/IQuestion";
import { IUser } from "../../Domain/Entities/IUser";
import { getUserCredentials } from "../../useCases/UserCredentials";


export interface IPostQuestionProps extends Omit<IQuestion, 'subject'>{
    subject_id: string | null | undefined,
};


export const baseQuestionProps :  IPostQuestionProps = {
    id: '',
    title: '',
    text: '',
    is_public: true,
    is_closed: false,
    subject_id: null,
    author: null
};

function generateBaseQuestion () : IPostQuestionProps {

    const credentialsResponse = getUserCredentials.execute();
    let data = baseQuestionProps;

    const author : IUser = credentialsResponse.getValue();
    data =  {
        ...baseQuestionProps,
        author
    }
  
    return data;

};

const baseQuestion = generateBaseQuestion();

export default baseQuestion;