export class MemoryStorage {
  private storage : any[];

  constructor() {
    this.storage = [];
  }

  public insert(record: any) {
    this.storage.push(record);
  }
}

export class PostService {
  private db = new MemoryStorage();

  createPost(title: string) {
    this.db.insert(title);
  }
}