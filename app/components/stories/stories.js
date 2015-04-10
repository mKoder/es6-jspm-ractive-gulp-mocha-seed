import httpClient from 'services/httpClient/httpClient';
import Ractive from 'ractive';
import listView from '../list/listView';

export default class {

    /**
     * Constructs the object, allows us to override the default client
     * so we can mock for testing. Using ES6 default parameter value
     *
     * @constructor
     */
    constructor(client = httpClient) {
        this.storiesUrl = 'http://www.reddit.com/r/all/search.json?q=betting&sort=relevance&t=all';
        this.httpClient = client;
    }

    /**
     * Initialises the app, fetching data from stories url. Uses 
     */
    init() {

        this.httpClient
            .getData(this.storiesUrl, 'jsonp', 'jsonp')
            .then(stories => {

                let processedStories = this.processStoryData(stories);
                let view = new listView(processedStories);
            });
    }

    processStoryData(data) {

        let stories = data[0].data.children;

        return stories.map(story => ({'title': story.data.title, 'url': story.data.url}));
    }
}