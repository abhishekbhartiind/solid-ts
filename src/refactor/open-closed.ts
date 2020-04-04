export interface Shape {
  area() : number;
}

export class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area() : number {
    return this.height * this.width;
  }
}

export class Square implements Shape {
  private height: number;

  constructor(height: number) {
    this.height = height;
  }

  public area() : number {
    return Math.pow(this.height, 2);
  }
}

export class AreaCalculator {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public sum() : number {
    let area = 0;

    this.shapes.forEach(shape => {
      area += shape.area();
    });

    return area;
  }
}