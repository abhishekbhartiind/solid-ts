import { MemoryStorage, PostService } from '../../src/legacy/dependency-inversion';

describe('Testing Dependency Inversion principle violation.', () => {
  it('Testing post insertion.', () => {
    const postService = new PostService();

    postService.createPost('test');
  });
});