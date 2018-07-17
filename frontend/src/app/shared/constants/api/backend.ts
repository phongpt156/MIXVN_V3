export const PORT = 8000;
export const HOST_NAME = 'localhost';

export const HOST = `//${HOST_NAME}:${PORT}`;

export const ADMIN = {
    signin: HOST + '/api/admin/signin',
    getAdmin: HOST + '/api/admin/info'
}

export const CATEGORY = {
    getAll: HOST + '/api/category',
    add: HOST + '/api/admin/category',
    edit: HOST + '/api/admin/category/',
    delete: HOST + '/api/admin/category/',
    getByGender: HOST + '/api/admin/category/gender/'
}

export const PARENT_CATEGORY = {
    add: HOST + '/api/admin/parent-category',
    edit: HOST + '/api/admin/parent-category/',
    delete: HOST + '/api/admin/parent-category/',
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
    edit: HOST + '/api/admin/collection/update/',
    delete: HOST + '/api/admin/collection/delete/'
}

export const FEATURE = {
    getAll: HOST + '/api/admin/feature',
    add: HOST + '/api/admin/feature',
    edit: HOST + '/api/admin/feature/',
    delete: HOST + '/api/admin/feature/'
}

export const FEATURE_VALUE = {
    getAll: HOST + '/api/admin/feature-value',
    add: HOST + '/api/admin/feature-value',
    edit: HOST + '/api/admin/feature-value/',
    delete: HOST + '/api/admin/feature-value/'
}

export const ITEM = {
    getAll: HOST + '/api/admin/item',
    add: HOST + '/api/admin/item',
    edit: HOST + '/api/admin/item/',
    delete: HOST + '/api/admin/item/',
    searchByName: HOST + '/api/admin/item/search/'
}

export const SET = {
    add: HOST + '/api/admin/set'
}
