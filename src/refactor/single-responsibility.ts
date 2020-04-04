export class User {
  private email : string;

  public getEmail() : string {
    return this.email;
  }

  public setEmail(email: string) : User {
    this.email = email;
    
    return this;
  }
}

export class UserDB {
  public store(user: User) : string {
    return `Storing user: ${ user.getEmail() }`;
  }
}