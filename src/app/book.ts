export class Book {
  id: number;
  title: string;
  author: string;
  alreadyRead: boolean;
  imageUrl: string;
  imageUrlGr: string;
  description: string;

  constructor (id: number, title: string, author:string, alreadyRead: boolean, imageUrl: string, imageUrlGr: string, description: string ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
    this.imageUrl = imageUrl;
    this.imageUrlGr = imageUrlGr;
    this.description = description;
  }
}

export interface Book {
  id: number,
  title: string,
  author: string,
  alreadyRead: boolean,
  imageUrl: string,
  imageUrlGr: string,
  description: string
}
