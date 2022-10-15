// import { IUserCredentialsProps } from "../../Domain/UserCredentials/IGetUserCredentials";
import { IUser } from "../../Domain/Entities/IUser";
import { axiosInstance } from "../../Infra/axios/axios-instance";
import { HTTPAxiosPostClient } from "../../Infra/axios/http-axios-post-client";
import { RemoteAuthentication } from "../Authentication/remote-authentication";
import { DeleteItemFromLocalStorage } from "../Cache/delete-from-local-storage";
import { GetItemfromLocalStorage } from "../Cache/get-item-from-local-storage";
import { SaveItemOnLocalStorage } from "../Cache/save-item-on-local-storage";
import { GetUserCredentials } from "./get-user-credentials";
import { SignIn } from "./sign-in";
import { SignOut } from "./sign-out";

const httpPostClient = new HTTPAxiosPostClient(axiosInstance);
const remoteAuthentication = new RemoteAuthentication('sessions', httpPostClient);
const saveItemOnCache = new SaveItemOnLocalStorage();
const signIn = new SignIn(remoteAuthentication, saveItemOnCache);

const getItemFromCache = new GetItemfromLocalStorage<IUser>();
const getUserCredentials = new GetUserCredentials(getItemFromCache);

const userCredentialsReponse = getUserCredentials.execute();

if(userCredentialsReponse.isFailure){
    console.log('Unable to get user credentials');
};

const userCredentials = userCredentialsReponse.getValue();

const deleteItemFromCache = new DeleteItemFromLocalStorage();
const signOut = new SignOut(deleteItemFromCache)

export { getUserCredentials, signIn, signOut, userCredentials };