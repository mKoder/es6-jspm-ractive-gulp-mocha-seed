import listTemplate from './list.hbs!text';
import Ractive from 'ractive';

export default class {

    constructor(stories) {
console.log(stories);
        let view = new Ractive({

            el: 'contentArea',
            template: listTemplate,
            data: { stories }
        });
    }
}
