import { Result } from "../../Core/Result";

export type SignInProps ={
    email: string;
    password: string;
};

export interface ISignIn {
    execute( signProps: SignInProps): Promise<Result<void>>
};
