import listTemplate from './list.hbs!text';
import Ractive from 'ractive';

export default class {

    constructor(stories) {

        let view = new Ractive({

            el: 'contentArea',
            template: listTemplate,
            data: { stories }
        });
    }
}
