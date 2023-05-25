import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  imports: [
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class PostListComponent implements OnInit {

  public postList: Post[] = [];

  constructor(private postService:PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostsFromAPI()
      .pipe(takeUntilDestroyed())
      .subscribe((postsResponse) => {
        this.postList = postsResponse
      })
  }
}
