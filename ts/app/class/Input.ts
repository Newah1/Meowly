export class Input{

    callbacks : any[] = [];

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
                if (typeof this.callbacks[key] != "undefined") {
                    this.callbacks[key](ev);
                }
            }
        }
    }


    keydown(ev){
        for (let key in this.config) {
            let key_codes = this.config[key]['keys'];
            if (key_codes.includes(ev.code)) {
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