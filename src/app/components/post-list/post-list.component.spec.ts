import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {provideHttpClient} from "@angular/common/http";
import {DebugElement} from "@angular/core";
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post";
import {of} from "rxjs";
import {By} from "@angular/platform-browser";

describe('PostListComponent', () => {
  let postListComponent: PostListComponent;
  let postListComponentComponentFixture: ComponentFixture<PostListComponent>;
  let postListComponentDebugElement: DebugElement;
  let postService: any;
  const POST_MOCK_RESPONSE: Post[] = [
    {
      id: 1,
      userId: 1,
      title: "title test 1",
      body: "body test 1"
    }, {
      id: 2,
      userId: 2,
      title: "title test 2",
      body: "body test 2"
    }
  ]

  beforeEach(() => {
      const postServiceSpy = jasmine.createSpyObj("PostService", ["getPostsFromAPI"])
      TestBed.configureTestingModule({
        imports: [PostListComponent],
        providers: [provideHttpClient(), {provide: PostService, useValue: postServiceSpy}]
      });
      postListComponentComponentFixture = TestBed.createComponent(PostListComponent);
      postListComponent = postListComponentComponentFixture.componentInstance;
      postListComponentDebugElement = postListComponentComponentFixture.debugElement;
      postService = TestBed.inject(PostService);
      postService.getPostsFromAPI.and.returnValue(of(POST_MOCK_RESPONSE));
      postListComponentComponentFixture.detectChanges();
    }
  );

  it('should create PostListComponent', () =>
    expect(postListComponent).toBeTruthy()
  );

  it('should display a non empty list of posts', () => {
    const allPostsDivDebugElements = postListComponentDebugElement.queryAll(By.css('#single-post'));
    expect(allPostsDivDebugElements.length)
      .withContext("Wrong number of posts displayed")
      .toBe(POST_MOCK_RESPONSE.length);
  });

  it('should retrieve correctly first post of list', () => {
    const firstPostDivDebugElement = postListComponentDebugElement.query(By.css('#single-post:first-child'));
    const firstPostTitle = firstPostDivDebugElement.query(By.css('.title'))
    const firstPostBody = firstPostDivDebugElement.query(By.css('.body'))
    expect(firstPostTitle.nativeElement.textContent).toContain(POST_MOCK_RESPONSE[0].title);
    expect(firstPostBody.nativeElement.textContent).toContain(POST_MOCK_RESPONSE[0].body);
  })

});
