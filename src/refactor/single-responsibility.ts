export class Book {
  constructor(private _author: string, private _title: string) {}

  get author(): string {
    return this._author;
  }

  get title(): string {
    return this._title;
  }
}

export interface RepositoryInterface<T> {
  save(entity: T): string;
}

export class BookRepository<T extends Book> implements RepositoryInterface<T> {
  // Here goes the code to store in the database
  // I'm returning a string for testing.
  save(book: T): string {
    return `Saving ${ book.title } by ${ book.author }`;
  }
}