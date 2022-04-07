import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private store$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]> ([]);


  constructor(http: HttpClient) {
    http.get<Book[]>('data/books.json').subscribe(data => this.state = data);
  }


  set state(books: Book[]) {
    this.store$.next(books)
  }


  getState (){
    return this.store$.asObservable();
  }

  updateState (newBooks$: any) {
    return this.store$.next(newBooks$)
  }


}
