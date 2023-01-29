import { Component } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';
import { MenuController, NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  authors: any;
  
  booksOff: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 2,
    centeredSlides: true,
    speed: 500
  }


  constructor(private libraryService: LibraryService,private modalController: ModalController,private menu: MenuController,
    private navCtrl: NavController) {}

    
  ionViewDidEnter(){
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })

    this.booksOff = this.libraryService.getBooksOffline();
    console.log(this.booksOff.books);

  }

  async showBooks(author:any) {
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }

  goTopBooks(){
    this.navCtrl.navigateForward("/menu/books-top");
    this.menu.close();
  }    

}
