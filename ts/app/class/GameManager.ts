import {Application, Container, SCALE_MODES, settings} from 'pixi.js';
import {GameLoader} from "./Loader";
import {Howl} from 'howler';

export class GameManager{

    public loader: GameLoader;

    public container: Container;

    public resources: any[];

    constructor(public application : Application) {

        this.container = new Container();
        this.application.stage.addChild(this.container);
        settings.SCALE_MODE = SCALE_MODES.NEAREST;
    }

    async init() {
        document.body.appendChild(this.application.view);
        this.loader = new GameLoader();
        return this.loader.load_assets().then((resources : any) => {
            console.log(resources);
            let music = new Howl({
                'src': resources.resources['title_music'].url,
                loop : true
            });
            this.resources = resources.resources;
            return true;
        });


    }
}