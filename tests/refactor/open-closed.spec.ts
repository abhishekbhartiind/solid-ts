import { Rectangle, Square, AreaCalculator, Shape } from '../../src/refactor/open-closed';

describe('Testing Open-Closed principle.', () => {
  let square: Shape;
  let rectangle : Shape;

  beforeAll(() => {
    square = new Square(3);
    rectangle = new Rectangle(10, 3);
  });

  it('Testing Square area.', () => {
    expect(square.area()).toBe(9);
  });

  it('Testing Rectangle area.', () => {
    expect(rectangle.area()).toBe(30);
  });

  it('Testing AreaCalculator sum.', () => {
    const shapes = [
      square,
      rectangle
    ];
    const calculator = new AreaCalculator(shapes);

    const expected = square.area() + rectangle.area();

    expect(calculator.sum()).toBe(expected);
  });
});