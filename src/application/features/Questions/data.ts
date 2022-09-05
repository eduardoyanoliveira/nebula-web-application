import { IQuestion } from "../../Domain/Entities/IQuestion";
import { IUser } from "../../Domain/Entities/IUser";
import { getUserCredentials } from "../../useCases/UserCredentials";


export interface IPostQuestionProps extends Omit<IQuestion, 'subject'>{
    subject_id: string | null | undefined,
};


export const baseQuestion :  IPostQuestionProps = {
    id: '',
    title: '',
    text: '',
    is_public: true,
    is_closed: false,
    subject_id: null,
    author: null
};

function useGenerateBaseQuestion () : IPostQuestionProps {

    const credentialsResponse = getUserCredentials.execute();
    let data = baseQuestion;

    const author : IUser = credentialsResponse.getValue();
    data =  {
        ...baseQuestion,
        author
    }
  
    return data;

};

export default useGenerateBaseQuestion;