import { Rectangle, Square } from '../../src/legacy/liskov-substitution';

describe('Testing Liskov Substitution principle violation.', () => {
  it('Passing same value for sides works.', () => {
    const square = new Square(3, 3);

    expect(square.area()).toBe(9);
  });

  it('Square area should be 9. Fails because sides are different.', () => {
    const square = new Square(3, 2);

    expect(square.area()).toBe(6);
  });

  it('Rectangle area is correct.', () => {
    const rectangle = new Rectangle(10, 3);

    expect(rectangle.area()).toBe(30);
  });
});