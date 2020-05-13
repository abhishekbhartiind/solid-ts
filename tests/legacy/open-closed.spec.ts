import { Rectangle, Square, AreaCalculator } from '../../src/legacy/open-closed';

describe('Testing Open-Closed principle violation.', () => {
  let square: Square;
  let rectangle : Rectangle;
  let areaCalculator: AreaCalculator;

  beforeAll(() => {
    square = new Square(3);
    rectangle = new Rectangle(10, 3);
    areaCalculator = new AreaCalculator([
      square, 
      rectangle
    ]);
  });

  it('Testing AreaCalculator sum.', () => {
    const expectedSquareArea = Math.pow(square.height, 2);
    const expectedRectangleArea = rectangle.height * rectangle.width;

    const expected = expectedSquareArea + expectedRectangleArea;

    expect(areaCalculator.sum()).toBe(expected);
  });
});