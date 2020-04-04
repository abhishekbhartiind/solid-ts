import { Car, FutureCar, Airplane } from '../../src/refactor/interface-segregation';

describe('Testing Interface Segregation principle.', () => {
  it('Testing Car.', () => {
    const car = new Car();

    expect(car.drive()).toBe('Driving Car.');
  });

  it('Testing FutureCar.', () => {
    const car = new FutureCar();

    expect(car.drive()).toBe('Driving Car.');
    expect(car.fly()).toBe('Flying Car.');
  });

  it('Testing Airplane.', () => {
    const plane = new Airplane();

    expect(plane.fly()).toBe('Flying Airplane.');
  });
});