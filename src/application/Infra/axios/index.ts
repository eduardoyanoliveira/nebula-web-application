import { axiosInstance } from "./axios-instance";
import { HTTPAxiosGetClient } from "./http-axios-get-client";
import { HTTPAxiosPatchClient } from "./http-axios-patch-client";
import { HTTPAxiosPostClient } from "./http-axios-post-client";

export const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);
export const httpAxiosPatchClient = new HTTPAxiosPatchClient(axiosInstance);
export const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
