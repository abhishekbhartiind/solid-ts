import { MemoryStorage, PostService } from '../../src/refactor/dependency-inversion';

describe('Testing Dependency Inversion principle.', () => {
  it('Testing post insertion.', () => {
    const db = new MemoryStorage();
    const postService = new PostService(db);

    postService.createPost('test');

    expect(db.getAll()).toStrictEqual(['test']);
  });

  it('Testing multiple posts.', () => {
    const db = new MemoryStorage();
    const postService = new PostService(db);

    postService.createPost('test');
    postService.createPost('second test');

    expect(db.getAll()).toStrictEqual(['test', 'second test']);
  });
});