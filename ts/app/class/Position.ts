import {GameObject} from "./GameObject";

export class Position {

    private _x : number;
    private _y : number;
    private _z : number;

    private parent : GameObject;

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;

    }

    public set_parent(p: GameObject) : void {
        this.parent = p;
    }


    public set(x = 0, y = 0, z =0 ) : void {
        this.x = x;
        this.y = y;
        this.z = z;
    }


    set x(x: number) {
        this._x = x;
        if (this.parent) {
            this.parent.sprite.x = x;
        }
    }

    get x() : number{
        return this._x;
    }

    set y(y:number){
        this._y = y;
        if (this.parent)
            this.parent.sprite.y = y;
    }

    get y() :number{
        return this._y;
    }

    get z() : number{
        return this._z;
    }

    set z(z:number){
        this._z = z;
        if (this.parent)
            this.parent.sprite.z = z;
    }

}