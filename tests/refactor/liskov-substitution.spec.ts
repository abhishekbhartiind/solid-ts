import { Shape, Rectangle, Square } from '../../src/refactor/liskov-substitution';

describe('Testing Liskov Substitution principle.', () => {
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
});