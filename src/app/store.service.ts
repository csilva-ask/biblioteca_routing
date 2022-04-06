import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private store$ = new BehaviorSubject<Book[]> ([]);

  books$: any;

  constructor(http: HttpClient) {
    this.books$ = http.get<Book[]>('data/books.json');
    this.store$.next(this.books$)
  }

  getState (){
    return this.store$.getValue();
  }

  updateState (newBooks$: any) {
    return this.store$.next(newBooks$)
  }



}
