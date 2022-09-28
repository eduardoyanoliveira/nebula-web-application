import { createContext, ReactNode, useState } from "react";
import { IBestAnswer } from "../../Domain/Entities/IBestAnswer";

export interface IBestAnswerContext {
    bestAnswer: IBestAnswer | undefined,
    setBestAnswer(bestAnswer: IBestAnswer | undefined): void
};

interface IBestAnswerProvider {
    children: ReactNode
}

export const BestAnswerContext = createContext({} as IBestAnswerContext);


export function BestAnswerProvider({ children } : IBestAnswerProvider){

    const [bestAnswer, setBestAnswer] = useState<IBestAnswer | undefined>();

    return(
        <BestAnswerContext.Provider value={
            {   
                bestAnswer,
                setBestAnswer,
            }
        }>
            {children}
        </BestAnswerContext.Provider>
    );
};