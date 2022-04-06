import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, map, Observable } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{

  productId: String | null;

  books: Observable<Book[]>;



  constructor(private route: ActivatedRoute, bookService: BookService) {
    this.productId = route.snapshot.paramMap.get("id");
    this.books = from([bookService.getBookById(Number(this.productId))]);
    console.log(this.books)
  }


}



