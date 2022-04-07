import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, from, map, Observable, of } from 'rxjs';
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

}
