import { MemoryStorage, Post } from '../../src/legacy/dependency-inversion';

describe('Testing Dependency Inversion principle violation.', () => {
  it('Testing post insertion.', () => {
    const post = new Post();

    post.createPost('test');
  });
});