export const PORT = 8000;

export const HOST = `//${location.hostname}:${PORT}`;

export const ADMIN = {
    signin: HOST + '/api/admin/signin',
    getAdmin: HOST + '/api/admin/info' 
}

export const CATEGORY = {
    getAll: HOST + '/api/category',
    add: HOST + '/api/admin/category',
    edit: HOST + '/api/admin/category/',
    delete: HOST + '/api/admin/category/'
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

export const SUPPLIER = {
    getAll: HOST + '/api/admin/supplier',
    add: HOST + '/api/admin/supplier',
    edit: HOST + '/api/admin/supplier/update/',
    delete: HOST + '/api/admin/supplier/delete/'
}

export const COLLECTION = {
    getAll: HOST + '/api/admin/collection',
    add: HOST + '/api/admin/collection',
    edit: HOST + '/api/admin/collection/update',
    delete: HOST + '/api/admin/collection/delete'
}
