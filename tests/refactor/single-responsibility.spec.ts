import { Book, BookRepository } from '../../src/refactor/single-responsibility';

describe('Testing Single Responsibility principle.', () => {
  it('Testing book creation.', () => {
    const book = new Book('Stephen King', 'Carrie');

    expect(book.title).toBe('Carrie');
    expect(book.author).toBe('Stephen King');
  });

  it('Testing BookRepository class.', () => {
    const book = new Book('Stephen King', 'IT');
    const bookRepository = new BookRepository<Book>();

    expect(book.title).toBe('IT');
    expect(book.author).toBe('Stephen King');
    expect(bookRepository.save(book)).toBe('Saving IT by Stephen King');
  });
});