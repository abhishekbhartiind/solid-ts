export interface Shape {
  area() : number;
}

export class Rectangle implements Shape {
  constructor(private _width: number, private _height: number) {}

  public area() : number {
    return this._height * this._width;
  }
}

export class Square implements Shape {
  constructor(private _height: number) {}

  public area() : number {
    return Math.pow(this._height, 2);
  }
}

export class AreaCalculator {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public sum() : number {
    return this.shapes
      .reduce((acc, shape) => acc += shape.area(), 0);
  }
}