import { $get, $post } from 'tools/ajax';

const _prefix = 'http://localhost:4000';
const urlPrefix = (url = '') => `${_prefix}${url}`;

export const portApi = (url, param) => $get(
    urlPrefix(url) || '',
    {
        data: param
    }
);

export const getItemApi = (param) => $get(
    urlPrefix('/app/data/getItem'),
    {
        data: param
    }
);

export const putItemApi = (param) => $post(
    urlPrefix('/app/data/putItem'),
    {
        data: param
    }
);