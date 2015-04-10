import httpClient from 'services/httpClient/httpClient';
import Ractive from 'ractive';
import listView from '../list/listView';

export default class {

    /**
     * @constructor
     *
     * @description
     * Constructs the object, allows us to override the default client
     * so we can mock for testing. Using ES6 default parameter value
     */
    constructor(client = httpClient) {
        this.storiesUrl = 'http://www.reddit.com/r/all/search.json?q=betting&sort=relevance&t=all';
        this.httpClient = client;
    }

    /**
     * @description
     * Initialises the app, fetching data from stories url. Passes the data off to
     * be transformed then creates a list view with that data
     * Uses ES6 arrow function,showing how 'this' context can now work with es6, & let
     */
    init() {

        this.httpClient
            .getData(this.storiesUrl, 'jsonp', 'jsonp')
            .then(stories => {

                let processedStories = this.processStoryData(stories);
                let view = new listView(processedStories);
            });
    }

    /**
     * @description
     * Gets the correct root child for the data, then maps it down to just the title and url
     * Uses ES6 map and arrow function, and shows how to return an object from an arrow
     * function (wrap in braces)
     */
    processStoryData(data) {

        let stories = data[0].data.children;

        return stories.map(story => ({'title': story.data.title, 'url': story.data.url}));
    }
}