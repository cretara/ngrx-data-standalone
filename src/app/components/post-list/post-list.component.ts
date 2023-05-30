import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {NgForOf, NgIf} from "@angular/common";
import {PostService} from "../../services/post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [
    NgIf,
    NgForOf,
  ],
  standalone: true
})
export class PostListComponent implements OnInit, OnDestroy {
  public postList: Post[] = [];
  private postListSubscription: Subscription = new Subscription();

  constructor(private postService: PostService) {

  }

  ngOnDestroy(): void {
    this.postListSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.postListSubscription = this.postService.getPostsFromAPI()
      .subscribe((postsResponse) => {
        this.postList = postsResponse
      })
  }

}
