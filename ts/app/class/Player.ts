import {GameObject} from "./GameObject";
import {TileSprite} from "./TileSprite";

import {gm} from "../../main";
import {Input} from "./Input";
import {Spritesheet} from 'pixi.js';

export class Player extends GameObject{

    input_manager: Input;
    speed = 5;
    sprites: Spritesheet;

    constructor() {
        super();
        this.input_manager = gm.input_manager;


        this.input_manager.on('Walk Left', ev => {
            this.walk('left');
        });
        this.input_manager.on('Walk Right', ev => {
            console.log('right');
            this.walk('right');
        });
    }

    update(deltaTime) {
        
    }


    walk(direction) {
        switch (direction) {
            case 'left':
                this.position.x -= .5 * this.speed;
                this.set_sprite(this.sheet.textures[direction]);
            case 'right':
                this.position.x += .5 * this.speed;
                this.set_sprite(this.sheet.textures[direction]);
        }

    }

}