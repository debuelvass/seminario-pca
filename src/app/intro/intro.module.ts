import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IntroPage } from './intro.page';

import { IntroPageRoutingModule } from './intro-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    IntroPageRoutingModule,
=======
    IntroPageRoutingModule
>>>>>>> 3d8a94381bac4736b9e9d32f63cac19754f97a99
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
