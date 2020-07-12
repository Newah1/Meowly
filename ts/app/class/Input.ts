import {Key} from "../interface/keys";

export class Input{

    callbacks : any[] = [];
    inputs: Key[] = [];
    actions: Key[] = [];

    constructor(public config) {
        this.listen();
    }

    on(action = "", callback : any) {
        this.callbacks[action] = callback;
    }

    keyup(ev){
        for (let key in this.config) {
            let key_codes = this.config[key]['keys'];
            if (key_codes.includes(ev.code)) {
                this.inputs[ev.code] = undefined;
                this.actions[key] = undefined;
                if (typeof this.callbacks[key] != "undefined") {
                    this.callbacks[key](ev);
                }
            }
        }
    }


    is_keydown(code){
        return (typeof this.inputs[code] == 'undefined') ? false : true;
    }

    is_actiondown(action){
        return (typeof this.actions[action] == 'undefined') ? false : true;
    }

    keydown(ev){

        for (let key in this.config) {
            let key_codes = this.config[key]['keys'];
            if (key_codes.includes(ev.code)) {
                this.inputs[ev.code] = {
                    key : ev.code,
                    enabled: true
                };
                this.actions[key] = {
                    key: ev.code,
                    enabled: true
                }
                if (typeof this.callbacks[key] != "undefined") {
                    this.callbacks[key](ev);
                }
            }
        }
    }


    listen() {
        document.addEventListener('keydown', this.keydown.bind(this));
        document.addEventListener('keyup', this.keyup.bind(this));
    }

}