import decode from 'jwt-decode';
import { getToken } from './selectors';
import { loadFromLocalStorage } from './localStorageHelpers';

export const checkAuth = () => {
    const token = getToken(loadFromLocalStorage());

    if (!token) {
        return false;
    }

    try {
        const { exp } = decode(token);

        if (exp < new Date().getTime() / 1000) {
            return false;
        }

    } catch (error) {
        return false;
    }

    return true;
};
