export const PORT = 80;

export const HOST = `//mixvn.webstarterz.com:${PORT}`;

export const CATEGORY = {
    getAll: HOST + '/api/category'
}

export const USER = {
    getUser: HOST + '/api/user',
    loginFacebook: HOST + '/api/login/facebook'
}

export const COLLECTION = {
    getCollections: HOST + '/api/collection'
}
