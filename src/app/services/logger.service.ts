import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(messageToLog: string) {
    console.log(messageToLog)
  }

}
