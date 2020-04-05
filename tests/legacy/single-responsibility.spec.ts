import { User } from '../../src/legacy/single-responsibility';

describe('Testing Single Responsibility principle violation.', () => {
  it('Testing store method from User class.', () => {
    const expectedValue = 'test@testing.com';

    const user = new User();
    user.setEmail(expectedValue);

    expect(user.getEmail()).toBe(expectedValue);
    expect(user.store()).toBe(`Storing user: ${expectedValue}`);
  });
});