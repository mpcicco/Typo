import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Word } from './models';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  protected baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {
    this.baseUrl += 'word';
  }
  public getWordList(): Observable<Word[]> {
    return this.http.get<Word[]>(this.baseUrl);
  }
}
