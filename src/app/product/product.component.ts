import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, from, Observable, of, switchMap, take, takeUntil } from 'rxjs';
import { Book } from '../book';
import {BookService } from '../book.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  books: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }


  handleDelete(bookId: number){
    this.bookService.deleteBook(bookId);
    this.handleFilterBook();
  }

  @ViewChild('read') read!: ElementRef;
  @ViewChild('notRead') notRead!: ElementRef;
  @ViewChild('all') all!: ElementRef;
  @ViewChild('searchbar') searchbar!: ElementRef;

  handleFilterBook(): Observable<Book[]>{

    if (this.read.nativeElement.checked){
      this.searchInput.setValue("")
      this.books = this.bookService.filterBook(true);

    }else if (this.notRead.nativeElement.checked){
      this.searchInput.setValue("")
      this.books = this.bookService.filterBook(false);

    }else{
      this.searchInput.setValue("")
      this.books = this.bookService.getBooks();

    }

    return this.books
  }




  searchInput: FormControl = new FormControl('');


  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      switchMap(a => a.length>0 ? this.bookService.searchBook(a, this.books): this.handleFilterBook())
    ).subscribe({
      next: resp => this.books = of(resp),
      error: err => console.log('erro')
  } );

  }


}



