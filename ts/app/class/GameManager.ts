import {Application, Container, SCALE_MODES, settings} from 'pixi.js';
import {GameLoader} from "./Loader";
import {Howl} from 'howler';
import {Input} from "./Input";
// @ts-ignore
import input_config from '../../../assets/config/inputs.json';


export class GameManager{

    public loaders: GameLoader[] = [];

    public container: Container;

    public resources: any[];

    public input_manager : Input;

    constructor(public application : Application) {

        this.container = new Container();
        this.application.stage.addChild(this.container);
        settings.SCALE_MODE = SCALE_MODES.NEAREST;

        console.log(input_config);

        this.input_manager = new Input(input_config);
    }

    async init() {
        document.body.appendChild(this.application.view);

        this.loaders.push(new GameLoader());
        this.loaders[0].shared_loader.add('meowly', 'assets/sprites/meowly/spritesheet.json');
        return this.loaders[0].load_assets();

    }
}