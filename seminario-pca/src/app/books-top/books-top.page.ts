import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-books-top',
  templateUrl: './books-top.page.html',
  styleUrls: ['./books-top.page.scss'],
})
export class BooksTopPage implements OnInit {

  top_books: any; 

  constructor(private libraryService: LibraryService) { }

     ngOnInit() {
      
      this.libraryService.getTopBooks().then(top_books =>{
        this.top_books = top_books
      })
    }

  

}
