import {GameObject} from './app/class/GameObject';
import {GameManager} from './app/class/GameManager';
import {TileSprite} from "./app/class/TileSprite";

import {Application} from 'pixi.js';


let gm = new GameManager(new Application({resizeTo: document.body}));
gm.init().then(ev => {
    console.log(ev, 'done');



    let tl = new TileSprite(gm.resources['floor'].url);
    gm.container.addChild(tl.sprite);

    window.addEventListener('mousemove', (ev : MouseEvent) => {

        // tl.position.set(ev.clientX, ev.clientY, 0);
    });
});

export {gm};