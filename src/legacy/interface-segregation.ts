export interface VehicleInterface {
  drive(): string;
  fly(): string;
}

export class FutureCar implements VehicleInterface {
  public drive() : string {
    return 'Driving Car.';
  }

  public fly() : string {
    return 'Flying Car.';
  }
}

export class Car implements VehicleInterface {
  public drive() : string {
    return 'Driving Car.';
  }

  public fly() : string {
    throw new Error('Not implemented method.');
  }
}

export class Airplane implements VehicleInterface {
  public drive() : string {
    throw new Error('Not implemented method.');
  }
  
  public fly() : string {
    return 'Flying Airplane.';
  }
}