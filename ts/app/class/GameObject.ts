import {Position} from './Position';
import {Sprite, Spritesheet, Texture} from 'pixi.js';
import {gm} from '../../main';


export class GameObject{

    public position: Position;

    public sprite : Sprite | any;

    public sheet : Spritesheet;

    public delta_time: number = 0;

    constructor() {
        this.sprite = new Sprite();
        this.position = new Position();
        this.position.set_parent(this);

        gm.container.addChild(this.sprite);
        gm.application.ticker.add(this.update, this);
        gm.application.ticker.add(this.update_delta_time, this);
    }

    update_delta_time(dt : number) {
        this.delta_time = dt;
    }

    update(deltaTime) {

    }

    set_sheet(sheet: Spritesheet) {
        this.sheet = sheet;
    }


    set_sprite(texture : Texture){
        // this.sprite = new Sprite(texture);
        this.sprite.texture = texture;

        this.sprite.scale.set(3);
    }


}