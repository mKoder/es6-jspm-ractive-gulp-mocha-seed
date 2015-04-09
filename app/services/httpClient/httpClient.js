import http from 'reqwest';

class httpClient {

    constructor() {
        this.http = http;
    }

    getData(url) {

        return new Promise((resolve, reject) => {

            this.http({
                url: url,
                type: 'json'
            })
            .then((resp) => resolve([resp,resp]), (err, msg) => reject(err));
        });

    }
}

export default new httpClient();