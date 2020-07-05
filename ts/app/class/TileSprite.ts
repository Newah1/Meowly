
import {GameObject} from "./GameObject";
import {TilingSprite, Texture} from 'pixi.js'

export class TileSprite extends GameObject{

    constructor(url) {
        super();
        let texture = Texture.from(url);
        this.set_sprite(new TilingSprite(texture, 100, 100));

    }

}