import {Position} from './Position';
import {Sprite} from 'pixi.js';

export class GameObject{

    public position: Position;

    public sprite : Sprite | any;

    constructor() {
        this.position = new Position();
        this.position.set_parent(this);

    }

    set_sprite(sprite : Sprite | any){
        this.sprite = sprite;

        this.sprite.scale.set(2);
    }


}