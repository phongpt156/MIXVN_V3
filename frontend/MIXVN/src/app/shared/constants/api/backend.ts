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
    add: HOST + '/api/admin/parent-category',
    edit: HOST + '/api/admin/parent-category/',    
    delete: HOST + '/api/admin/parent-category/',
}

export const CATEGORY_GROUP = {
    add: HOST + '/api/admin/category-group',
    edit: HOST + '/api/admin/category-group/',
    delete: HOST + '/api/admin/category-group/',
}
