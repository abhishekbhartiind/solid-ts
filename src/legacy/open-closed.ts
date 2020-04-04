export class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getLength() : number {
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

  public getLength() : number {
    return this.height; 
  }
}

export class AreaCalculator {
  private shapes: Square[]|Rectangle[];

  constructor(shapes: Square[]|Rectangle[]) {
    this.shapes = shapes;
  }

  public sum() {
    let area = 0;

    this.shapes.forEach(shape => {
      if (shape instanceof Square) {
        area += Math.pow(shape.getLength(), 2);
      }
      if (shape instanceof Rectangle) {
        area += shape.getLength() * shape.getWidth();
      }
    });

    return area;
  }
}