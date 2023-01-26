import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage {
  authors: any;
  booksOff: any;
  constructor(private libraryService: LibraryService) { }

  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })

    this.booksOff = this.libraryService.getBooksOffline();
    console.log(this.booksOff.books);

  }

}
