import reqwest from 'reqwest';

class httpClient {

    getData(url) {

        return new Promise((resolve, reject) => {

            reqwest({
                url: url,
                type: 'json'
            })
            .then((resp) => resolve([resp,resp]), (err, msg) => reject(err));
        });

    }
}

export default new httpClient();