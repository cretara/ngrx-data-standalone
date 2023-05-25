import {TestBed} from '@angular/core/testing';

import {PostService} from './post.service';

describe('PostServiceService', () => {
  let postService: PostService;
  let loggerService: any;

  beforeEach(() => {
    loggerService = jasmine.createSpyObj("LoggerService", ["log"]);
    TestBed.configureTestingModule({});
    postService = TestBed.inject(PostService);
  });

  it('PostService should log a certain message', () => {
    postService.logACertainMessage(postService.messageToLog);
    expect(postService).toBeTruthy();
  });
});
