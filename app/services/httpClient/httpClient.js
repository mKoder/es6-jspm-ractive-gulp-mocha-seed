import http from 'reqwest';

class httpClient {

    constructor() {
        this.http = http;
    }

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