export class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getHeight() : number {
    return this.height; 
  }

  public getWidth() : number {
    return this.width;
  }
}

export class Square {
  private height: number;

  constructor(height: number) {
    this.height = height;
  }

  public getHeight() : number {
    return this.height; 
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
        acc += Math.pow(shape.getHeight(), 2);
      }
      if (shape instanceof Rectangle) {
        acc += shape.getHeight() * shape.getWidth();
      }
      return acc;
    }, 0);
  }
}