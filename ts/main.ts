import {GameObject} from './app/class/GameObject';
import {GameManager} from './app/class/GameManager';
import {TileSprite} from "./app/class/TileSprite";

import {Application, Loader, Spritesheet, Sprite} from 'pixi.js';
import {Player} from "./app/class/Player";


let gm = new GameManager(new Application({resizeTo: document.body}));
gm.init().then((ev : Loader) => {

    console.log(ev, 'done');
    let meowly = new Player();
    meowly.set_sheet((<Spritesheet><unknown>ev.resources['meowly']));
    meowly.set_sprite(meowly.sheet.textures['front.png']);

    gm.container.addChild(meowly.sprite);


    console.log(meowly, meowly.sheet.textures['front.png']);
    // meowly.position.set(5, 10);

    window.addEventListener('mousemove', (ev : MouseEvent) => {
        // meowly.position.set(ev.clientX, ev.clientY, 0);
        // tl.position.set(ev.clientX, ev.clientY, 0);
        // console.log(meowly);
        // console.log(ev.clientY);
    });
});

export {gm};