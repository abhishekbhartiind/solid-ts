export class Rectangle {
  constructor(private _width: number, private _height: number) {}

  get height(): number {
    return this._height; 
  }

  get width(): number {
    return this._width;
  }
}

export class Square {
  constructor(private _height: number) {}

  get height(): number {
    return this._height; 
  }
}

export class AreaCalculator {
  private shapes: any[];

  constructor(shapes: any[]) {
    this.shapes = shapes;
  }

  public sum() {
    return this.shapes.reduce((acc, shape) => {
      if (shape instanceof Square) {
        acc += Math.pow(shape.height, 2);
      }
      if (shape instanceof Rectangle) {
        acc += shape.height * shape.width;
      }
      return acc;
    }, 0);
  }
}