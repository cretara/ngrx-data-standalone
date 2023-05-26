import {TestBed} from '@angular/core/testing';
import {PostService} from './post.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Post} from "../model/post";
import {LoggerService} from "./logger.service";

describe('PostServiceService', () => {
  let postService: PostService;
  let loggerServiceSpy: any;
  let httpTestingController: HttpTestingController;

  const SINGLE_POST_ID = 1;

  beforeEach(() => {
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PostService,
        {
          provide: LoggerService,
          useValue: loggerServiceSpy
        },
      ]
    });
    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('PostService should log a certain message', () => {
    postService.logACertainMessage(postService.messageToLog);
    expect(postService).toBeTruthy();
  });

  it('PostService should retrieve correctly post list', () => {
    const postResponseMockNew: Post[] = [
      {
        id: 1,
        body: "body test 1",
        title: "title test 1",
        userId: 1
      },
      {
        id: 2,
        body: "body test 2",
        title: "title test 2",
        userId: 2
      },
    ];
    postService
      .getPostsFromAPI()
      .subscribe(
        (responseGetPostAPI) => {
          expect(responseGetPostAPI)
            .withContext('No post is returned')
            .toBeTruthy();
          expect(responseGetPostAPI.length)
            .withContext("Wrong number of posts retrieved from jsonplaceholder API")
            .toBe(postResponseMockNew.length);
          const singlePost = postResponseMockNew[SINGLE_POST_ID];
          expect(singlePost?.title)
            .withContext(`'singlePost title with id ${SINGLE_POST_ID} not equal to ${postResponseMockNew[SINGLE_POST_ID].title} `)
            .toBe(postResponseMockNew[SINGLE_POST_ID].title)
        }
      );

    const getPostRequest = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts`);
    expect(getPostRequest.request.method).toEqual("GET");
    getPostRequest.flush(postResponseMockNew);
  })

  afterEach(() => httpTestingController.verify())
});
