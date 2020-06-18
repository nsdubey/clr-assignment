import { STORAGE_KEYS } from "./constants";

const getTokenFromLocalStorage = () => {
    let token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN_KEY);
    if (!token) {
        return "";
    }
    return token;
}

export function isLoggedIn() {
    return getTokenFromLocalStorage().trim().length > 0 ? true : false;
}