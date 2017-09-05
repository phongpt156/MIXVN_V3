export const PORT = 8000;

export const HOST = `//${location.hostname}:${PORT}`;

export const ADMIN = {
    signin: HOST + '/api/admin/signin',
    getAdmin: HOST + '/api/admin/info' 
}
