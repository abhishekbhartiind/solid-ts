export class User {
  private email : string;

  public getEmail() : string {
    return this.email;
  }

  public setEmail(email: string) : User {
    this.email = email;
    
    return this;
  }

  public store() {
    return `Storing user: ${ this.getEmail() }`;
  }
}