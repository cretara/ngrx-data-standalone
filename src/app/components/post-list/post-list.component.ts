import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/post";
import {NgForOf, NgIf} from "@angular/common";
import {PostService} from "../../services/post.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostsFromAPI()
      .pipe(takeUntilDestroyed())
      .subscribe((postsResponse) => {
        this.postList = postsResponse
      })
  }
}
