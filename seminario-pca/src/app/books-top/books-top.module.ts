import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksTopPageRoutingModule } from './books-top-routing.module';

import { BooksTopPage } from './books-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksTopPageRoutingModule
  ],
  declarations: [BooksTopPage]
})
export class BooksTopPageModule {}
