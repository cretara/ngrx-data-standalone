import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {provideHttpClient} from "@angular/common/http";
import {DebugElement} from "@angular/core";
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post";
import {of} from "rxjs";

describe('PostListComponent', () => {
  let postListComponent: PostListComponent;
  let postListComponentComponentFixture: ComponentFixture<PostListComponent>;
  let postListComponentDebugElement: DebugElement;
  let postService: any;

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
    }
  );

  it('should create PostListComponent', () =>
    expect(postListComponent).toBeTruthy()
  );

  it('should display a non empty list of posts', () => {
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
    postService.getPostsFromAPI.and.returnValue(of(POST_MOCK_RESPONSE));
    postListComponentComponentFixture.detectChanges();
    console.debug("postComponent list of posts retrieved", postListComponent.postList);
  })

});
