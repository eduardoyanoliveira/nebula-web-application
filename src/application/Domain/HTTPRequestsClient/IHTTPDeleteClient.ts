import { Result } from "../../Core/Result";
import { IHTTPResponse } from "./interfaces";

export interface IHTTPDeleteClient {
    /**
     * An implementation of a http delete request
     * @param url the url used in the delete request
     */
    delete( url: string, id: string ): Promise<Result<IHTTPResponse>>
};