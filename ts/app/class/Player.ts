import {GameObject} from "./GameObject";
import {TileSprite} from "./TileSprite";

import {gm} from "../../main";
import {Input} from "./Input";
import {Spritesheet} from 'pixi.js';


export class Player extends GameObject{

    input_manager: Input;
    public speed : number = 2;
    sprites: Spritesheet;

    constructor() {
        super();
        this.input_manager = gm.input_manager;

    }

    update(deltaTime) {


        if (this.input_manager.is_actiondown("Walk Left")) {
            this.walk('left');
        } else if (this.input_manager.is_actiondown("Walk Down")) {
            this.walk('front');
        } else if (this.input_manager.is_actiondown("Walk Up")) {
            this.walk('back');
        } else if (this.input_manager.is_actiondown("Walk Right")) {
            this.walk('right');
        }
    }


    walk(direction) {
        this.set_sprite(this.sheet.textures[`${direction}.png`]);
        switch (direction) {
            case 'left':
                let old_pos = this.position.x;
                this.position.x = old_pos - (this.speed * this.delta_time);
                break;
            case 'right':
                this.position.x += (this.speed * this.delta_time);
                break;
            case 'back':
                this.position.y -= (this.speed * this.delta_time);
                break;
            case 'front':
                this.position.y += (this.speed * this.delta_time);
                break;
            default:
                break;
        }

    }

}