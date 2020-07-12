import {Position} from './Position';
import {Sprite, Spritesheet, Texture} from 'pixi.js';
import {gm} from '../../main';


export class GameObject{

    public position: Position;

    public sprite : Sprite | any;

    public sheet : Spritesheet;

    constructor() {
        this.position = new Position();
        this.position.set_parent(this);

        this.sprite = new Sprite();


        gm.application.ticker.add(this.update, this);
    }

    update(deltaTime) {
    }

    set_sheet(sheet: Spritesheet) {
        this.sheet = sheet;
    }


    set_sprite(texture : Texture){
        this.sprite = new Sprite(texture);

        this.sprite.scale.set(2);
        gm.container.addChild(this.sprite);
    }


}