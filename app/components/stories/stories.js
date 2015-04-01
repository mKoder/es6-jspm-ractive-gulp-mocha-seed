import httpClient from 'services/httpClient';
import Ractive from 'ractive';
import listView from '../list/listView';

export default class {

    constructor() {
        this.storiesUrl = 'http://www.reddit.com/r/all/search.json?q=betting&sort=relevance&t=all';
    }

    init() {
        httpClient
            .getData(this.storiesUrl)
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