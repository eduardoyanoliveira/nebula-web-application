import { axiosInstance, axiosInstanceMultipart } from "./axios-instance";
import { HTTPAxiosDeleteClient } from "./http-axios-delete.client";
import { HTTPAxiosGetClient } from "./http-axios-get-client";
import { HTTPAxiosPatchClient } from "./http-axios-patch-client";
import { HTTPAxiosPostClient } from "./http-axios-post-client";

export const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);
export const httpAxiosPatchClient = new HTTPAxiosPatchClient(axiosInstance);
export const httpAxiosPostClient = new HTTPAxiosPostClient(axiosInstance);
export const httpAxiosDeleteClient = new HTTPAxiosDeleteClient(axiosInstance);

export const httpAxiosMultipartPostClient = new HTTPAxiosPostClient(axiosInstanceMultipart);
export const httpAxiosMultipartPatchClient = new HTTPAxiosPatchClient(axiosInstanceMultipart);