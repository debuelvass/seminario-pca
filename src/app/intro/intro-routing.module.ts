import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> 3d8a94381bac4736b9e9d32f63cac19754f97a99
import { IntroPage } from './intro.page';

const routes: Routes = [
  {
    path: '',
    component: IntroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroPageRoutingModule {}
