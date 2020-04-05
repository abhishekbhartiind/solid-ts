import { Car, FutureCar, Airplane } from '../../src/legacy/interface-segregation';

describe('Testing Interface Segregation principle violation.', () => {
  it('Testing Car.', () => {
    const car = new Car();

    expect(car.drive()).toBe('Driving Car.');
    try {
      car.fly();
    } catch(e) {
      expect(e.message).toBe('Not implemented method.');
    }
  });

  it('Testing FutureCar.', () => {
    const car = new FutureCar();

    expect(car.drive()).toBe('Driving Car.');
    expect(car.fly()).toBe('Flying Car.');
  });

  it('Testing Airplane.', () => {
    const plane = new Airplane();

    expect(plane.fly()).toBe('Flying Airplane.');
    
    try {
      plane.drive();
    } catch(e) {
      expect(e.message).toBe('Not implemented method.');
    }
  });
});