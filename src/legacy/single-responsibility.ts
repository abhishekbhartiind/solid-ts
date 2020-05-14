export class Book {
  constructor(private _author: string, private _title: string) {}

  get author(): string {
    return this._author;
  }

  get title(): string {
    return this._title;
  }

  // Here goes the code to store in the database
  // I'm returning a string for testing.
  save(): string {
    return `Saving ${ this.title } by ${ this.author }`;
  }
}