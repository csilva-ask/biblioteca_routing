import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, from, map, Observable, of } from 'rxjs';
import { Book } from './book';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor( private http: HttpClient, private state: StoreService){
  }


  getBooks(): any{
    return this.state.getState()
  }

  getBookById(bookId: number) {
    console.log(this.state.getState())
    return this.state.getState().filter(b => b.id === bookId);

  }

}
