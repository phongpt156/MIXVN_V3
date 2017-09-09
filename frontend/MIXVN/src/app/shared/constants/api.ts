export const PORT = 8000;

export const HOST = `//${location.hostname}:${PORT}`;

export const ADMIN = {
    signin: HOST + '/api/admin/signin',
    getAdmin: HOST + '/api/admin/info' 
}

export const CATEGORY = {
    getAll: HOST + '/api/category'
}

export const PARENT_CATEGORY = {
    add: HOST + '/api/admin/parent-category'
}
