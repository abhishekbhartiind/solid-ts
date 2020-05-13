export class Rectangle {
  constructor(private _width: number, private _height: number) {}

  public area() : number {
    return this._height * this._width;
  }
}

export class Square extends Rectangle {}