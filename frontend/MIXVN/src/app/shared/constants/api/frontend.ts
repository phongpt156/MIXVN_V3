export const PORT = 8000;

export const HOST = `//localhost:${PORT}`;

export const CATEGORY = {
    getAll: HOST + '/api/category',
    getChild: HOST + '/api/category/child',
}

export const USER = {
    getUserByToken: HOST + '/api/user',
    loginFacebook: HOST + '/api/login/facebook',
    getUserById: HOST + '/api/user/',
    getSetsUserLike: HOST + '/api/user/liked/'
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

export const SUPPLIER = {
    getSupplier: HOST + '/api/supplier/',
    getSetsBySupplier: HOST + '/api/supplier/',
    searchSet: HOST + '/api/supplier/'
}
