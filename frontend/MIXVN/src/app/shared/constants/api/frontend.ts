export const PORT = 8000;

export const HOST = `//localhost:${PORT}`;

export const CATEGORY = {
    getAll: HOST + '/api/category',
    getChild: HOST + '/api/category/child',
}

export const USER = {
    getUser: HOST + '/api/user',
    loginFacebook: HOST + '/api/login/facebook'
}

export const COLLECTION = {
    getCollections: HOST + '/api/collection',
    getCollectionPage: HOST + '/api/collection/page/'
}

export const SET = {
    getSets: HOST + '/api/set/type=',
    getSetsByItem: HOST + '/api/set/item/',
    like: HOST + '/api/set/like/',
    search: HOST + '/api/set/search'
}
