const _ = {
    JSONParse(string) {
        try {
            return JSON.parse(string);
        } catch (e) {
            return false;
        }
    },

    stringEvalData(str) {
        try {
            /* eslint-disable */
            return eval(`(${str})`);
            /* eslint-enable */
        } catch (e) {
            // console.log(e);
            return null;
        }
    },

    isPort(str = '') {
        const parten = /^(\d)+$/g;
        return parten.test(str)
                && parseInt(str) <= 65535
                && parseInt(str) >= 0;
    }
};

export default _;