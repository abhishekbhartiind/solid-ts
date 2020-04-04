import { MemoryStorage, Post } from '../../src/refactor/dependency-inversion';

describe('Testing Dependency Inversion principle.', () => {
  it('Testing post insertion.', () => {
    const db = new MemoryStorage();
    const post = new Post(db);

    post.createPost('test');

    expect(db.getAll()).toStrictEqual(['test']);
  });

  it('Testing multiple posts.', () => {
    const db = new MemoryStorage();
    const post = new Post(db);

    post.createPost('test');
    post.createPost('second test');

    expect(db.getAll()).toStrictEqual(['test', 'second test']);
  });
});