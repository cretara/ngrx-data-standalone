import {TestBed} from '@angular/core/testing';
import {PostService} from './post.service';
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {postResponseMock} from "../model/post";
import {LoggerService} from "./logger.service";
import {PostListComponent} from "../components/post-list/post-list.component";
import {provideHttpClient} from "@angular/common/http";
import {PostListMockComponent} from "../components/mock/post-list-mock/post-list-mock.component";

describe('PostServiceService', () => {
  let postService: PostService;
  let loggerServiceSpy: any;
  let httpTestingController: HttpTestingController;

  const SINGLE_POST_ID = 63;
  const SINGLE_POST_TITLE = 'voluptas blanditiis repellendus animi ducimus error sapiente et suscipit';

  beforeEach(() => {
    loggerServiceSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    TestBed.configureTestingModule({
      providers: [
        PostService,
        {
          provide: LoggerService,
          useValue: loggerServiceSpy
        },
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).overrideComponent(PostListComponent, {
      remove: {imports: [PostListComponent]},
      add: {imports: [PostListMockComponent]}
    })
      .compileComponents();
    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('PostService should log a certain message', () => {
    postService.logACertainMessage(postService.messageToLog);
    expect(postService).toBeTruthy();
  });

  it('PostService should retrieve correctly post list', () => {
    postService
      .getPostsFromAPI()
      .subscribe(
        (responseGetPostAPI) => {
          expect(responseGetPostAPI)
            .withContext('No post is returned')
            .toBeTruthy();
          console.debug("responseGetPostAPI", responseGetPostAPI);
          expect(responseGetPostAPI.length)
            .withContext("Wrong number of posts retrieved from jsonplaceholder API")
            .toBe(100);
          const singlePost = responseGetPostAPI
            .find((singlePost) => singlePost.id === SINGLE_POST_ID);
          expect(singlePost?.body)
            .withContext(`'singlePost title with id ${SINGLE_POST_ID} not equal to ${SINGLE_POST_TITLE} `)
            .toBe(SINGLE_POST_TITLE)
        }
      );
    const getPostRequest = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/posts`);
    expect(getPostRequest.request.method).toEqual("GET");
    getPostRequest.flush({
      postResponseMock
    });
    httpTestingController.verify();
  })
});
