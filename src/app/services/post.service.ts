import {Injectable} from '@angular/core';
import {Post} from "../model/post";
import {LoggerService} from './logger.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private loggerService: LoggerService, private httpClient: HttpClient) {
  }


  get messageToLog(): string {
    return this._messageToLog;
  }

  private readonly _messageToLog = "A certain message";

  logACertainMessage(messageToLog = this._messageToLog){
    this.loggerService.log(messageToLog);
  }

  getPostsFromAPI() {
    return this.httpClient.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts`
    )
  }

}
