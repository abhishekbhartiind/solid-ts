import { Book } from '../../src/legacy/single-responsibility';

describe('Testing Single Responsibility principle violation.', () => {
  it('Testing save method from Book class.', () => {
    const book = new Book('Stephen King', 'IT');

    expect(book.author).toBe('Stephen King');
    expect(book.title).toBe('IT');
    expect(book.save()).toBe(`Saving IT by Stephen King`);
  });
});