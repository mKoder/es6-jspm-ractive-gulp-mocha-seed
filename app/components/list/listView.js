import listTemplate from './list.hbs!text';
import Ractive from 'ractive';

export default class {

    /**
     * @constructor
     *
     * @description
     * Creates an ractive view targetting the contentArea element, using the
     * handlebars list template and the data passed
     */
    constructor(stories) {

        let view = new Ractive({

            el: 'contentArea',
            template: listTemplate,
            data: { stories }
        });
    }
}
