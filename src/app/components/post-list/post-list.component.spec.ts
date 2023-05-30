import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {provideHttpClient} from "@angular/common/http";
import {DebugElement} from "@angular/core";

describe('PostListComponent', () => {
  let postListComponent: PostListComponent;
  let postListComponentComponentFixture: ComponentFixture<PostListComponent>;
  let postListComponentDebugElement: DebugElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PostListComponent],
        providers: [provideHttpClient()]
      });
      postListComponentComponentFixture = TestBed.createComponent(PostListComponent);
      postListComponent = postListComponentComponentFixture.componentInstance;
      postListComponentDebugElement = postListComponentComponentFixture.debugElement;
    }
  );

  it('should create PostListComponent', () =>
    expect(postListComponent).toBeTruthy()
  );

  it('should display a non empty list of posts', () => {
    postListComponentComponentFixture.detectChanges();
    console.debug("postComponent list of posts retrieved", postListComponent.postList);
  })

});
