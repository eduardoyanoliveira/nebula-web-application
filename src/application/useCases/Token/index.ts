import { DeleteItemFromLocalStorage } from "../Cache/delete-from-local-storage";
import { GetItemfromLocalStorage } from "../Cache/get-item-from-local-storage";
import { GetTokenFromCache } from "./get-token-from-cache";
import { RemoveTokenFromCache } from "./remove-token-from-cache";

const getItemFromCache = new GetItemfromLocalStorage<string>();
const getTokenFromCache = new GetTokenFromCache(getItemFromCache, '@token');

const deleteItemFromCache = new DeleteItemFromLocalStorage();
const removeTokenFromCache = new RemoveTokenFromCache(deleteItemFromCache, '@token');

export { getTokenFromCache, removeTokenFromCache };