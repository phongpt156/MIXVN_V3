export const PORT = 8000;

export const HOST = `//${location.hostname}:${PORT}`;

export const CATEGORY = {
    getAll: HOST + '/api/category'
}

export const USER = {
    loginFacebook: HOST + '/api/login/facebook'
}
