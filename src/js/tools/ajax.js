import axios from 'axios';
import { Message } from 'element-ui';

export const $request = async (url, options) => {
    let {
        method = 'GET',
        data = {}
    } = options;

    method = method.toLowerCase();

    let config = { url, method, data };

    if(method === 'get') {
        config.params = data;
    }

    try {
        const json = await axios(config);
        const res = json.data || {};

        if(res.code === 200) {
            return Promise.resolve(res);
        }

        Message.error(res.msg || '返回非200');

        return Promise.reject(res);

    } catch(err) {
        return Promise.reject(err);
    }
};

export const $get = (url, options = {}) => $request(url, options);

export const $post = (url, options = {}) => {
    options.method = 'POST';

    return $request(url, options);
};