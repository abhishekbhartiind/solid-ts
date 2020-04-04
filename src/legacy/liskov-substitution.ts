export class Rectangle {
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

export class Square extends Rectangle {}