import http from 'reqwest';

class httpClient {

    /**
     * @constructor
     *
     * @description
     * Sets http to the object, so we can spy on it in tests
     */
    constructor() {
        this.http = http;
    }

    /**
     * @description
     * Gets data from a given url, with options for jsonp and changing the
     * jsonp callback parameter name
     * Uses ES6 default parameter values
     */
    getData(url, requestType = 'json', jsonpQueryName = 'callback') {

        return new Promise((resolve, reject) => {

            this.http({
                url: url,
                type: requestType,
                jsonpCallback: jsonpQueryName
            })
            .then((resp) => resolve([resp,resp]), (err, msg) => reject(err));
        });

    }
}

export default new httpClient();