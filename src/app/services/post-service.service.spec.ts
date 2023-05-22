import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostServiceService', () => {
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    postService = TestBed.inject(PostService);
  });

  it('PostService should be created', () => {
    expect(postService).toBeTruthy();
  });
});
