import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  book: any;
  like_button: boolean = false;
  user_id: any;

  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService,private storage: Storage,

    ) { }

    async ngOnInit() {
      this.book = this.navParams.get("book");
      this.user_id = await this.storage.get("user_id");
      this.libraryService.getCheckLikeBook(this.user_id, this.book.id).subscribe((data:any) =>{
        this.like_button = data.like
      },
      (error) => 
        console.log(error)
      )
    }
 

  closeModal(){
    this.modalController.dismiss();
  }

  like(){
    this.libraryService.likeBook(this.user_id, this.book.id).subscribe((data:any) => {
      this.like_button = true;
    }, (error) =>
    console.log(error)
    )
  }
  disLike(){
    this.libraryService.disLike(this.user_id, this.book.id).subscribe((data:any) => {
      if (data.status == "OK"){
        this.like_button = false
      }
    }, (error) => 
      console.log(error)
    )
  }

}
