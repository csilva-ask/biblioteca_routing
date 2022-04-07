import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Book } from '../book';
import {BookService } from '../book.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  books: Observable<Book[]>;


  constructor(bookService: BookService) {
    this.books = bookService.getBooks();

   }

}



