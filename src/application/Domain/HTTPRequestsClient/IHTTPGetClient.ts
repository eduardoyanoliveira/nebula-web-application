import { Result } from "../../Core/Result";
import { IHTTPResponse } from "./interfaces";


export interface IHTTPGetClient {
    /**
     * An implementation of a http get request
     * @param url the url used in the get request
     * @param finnalyFn Optional finnaly function to be executed in the end of the requisition
     */
    get( url: string, finnalyFn?: Function ): Promise<Result<IHTTPResponse>>
};