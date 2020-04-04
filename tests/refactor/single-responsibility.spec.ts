import { User, UserDB } from '../../src/refactor/single-responsibility';

describe('Testing Single Responsibility principle.', () => {
  it('Testing User class.', () => {
    const expectedValue = 'test@testing.com';

    const user = new User();
    user.setEmail(expectedValue);

    expect(user.getEmail()).toBe(expectedValue);
  });

  it('Testing UserDB class.', () => {
    const expectedValue = 'test@testing.com';

    const user = new User();
    user.setEmail(expectedValue);

    const userDB = new UserDB();

    expect(userDB.store(user)).toBe(`Storing user: ${expectedValue}`);
  });
});