import {Loader, resources} from 'pixi.js';

export class GameLoader {

    public shared_loader: Loader;
    public resources: any;

    constructor() {
        this.shared_loader = Loader.shared;
    }


    load_assets() {
        return new Promise((resolve, reject) => {
            let loader = this.shared_loader;
            loader.add('title_music', 'assets/music/TheTitle.mp3');
            loader.add('floor', 'assets/sprites/wood_floor.jpeg');
            loader.load((resources) => {
                this.resources = resources;
                resolve(resources);
            });
        });
    }

}