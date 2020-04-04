export interface Shape {
  area() : number;
}

export class Rectangle implements Shape {
  private width: number;
  private length: number;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  public area() : number {
    return this.length * this.width;
  }
}

export class Square implements Shape {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  public area() : number {
    return Math.pow(this.length, 2);
  }
}