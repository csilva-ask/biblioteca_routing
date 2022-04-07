import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import { Book } from './book';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root'
})

export class BookService {



  constructor(private state: StoreService){
  }


  getBooks(): Observable<Book[]> {

    return this.state.getState()
  }

  getBookById(bookId: number): Observable<Book[]> {
    return this.getBooks().pipe(map(res =>res.filter( b => b.id === bookId)));
  }

  deleteBook(bookId: number) {
  return this.getBooks().pipe(map(res =>res.filter( b => b.id !== bookId))).subscribe(a => this.state.updateState(a));
  }


}
