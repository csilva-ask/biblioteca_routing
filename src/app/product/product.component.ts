import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, from, Observable, of, switchMap } from 'rxjs';
import { Book } from '../book';
import {BookService } from '../book.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  books: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

  handleDelete(bookId: number){
    this.bookService.deleteBook(bookId)
  }

  @ViewChild('read') read!: ElementRef;
  @ViewChild('notRead') notRead!: ElementRef;

  handleFilterBook(checked: boolean){

    if (this.read.nativeElement.checked === checked){
      this.books = this.bookService.getBooks();
      this.searchInput.setValue("")
      this.books = this.bookService.filterBook(true);

    }else if (this.notRead.nativeElement.checked === checked){
      this.books = this.bookService.getBooks();
      this.searchInput.setValue("")
      this.books = this.bookService.filterBook(false);

    }else{
      this.books = this.bookService.getBooks();
      this.searchInput.setValue("")
    }
  }


  searchInput: FormControl = new FormControl('');



  ngOnInit(): void {

    this.searchInput.valueChanges.pipe(
      debounceTime(400),
      switchMap(a => a.length >0 ? this.bookService.searchBook(a, this.books): this.books)
    ).subscribe({
      next: resp => this.books = of(resp),
      error: err => console.log('erro')
    })

  }

}



