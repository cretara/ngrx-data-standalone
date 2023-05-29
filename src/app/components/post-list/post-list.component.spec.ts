import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";

describe('PostListComponent', () => {
  let postListComponent: PostListComponent;
  let postListComponentComponentFixture: ComponentFixture<PostListComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PostListComponent],
        providers: [provideHttpClient(), provideHttpClientTesting()]
      });
      postListComponentComponentFixture = TestBed.createComponent(PostListComponent);
      postListComponent = postListComponentComponentFixture.componentInstance;
    }
  );

  it('should create PostListComponent', async () => {
    expect(postListComponent).toBeTruthy();
  });

});
