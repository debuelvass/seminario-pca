import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/guards.page'; 
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'books-modal',
    loadChildren: () => import('./books-modal/books-modal.module').then( m => m.BooksModalPageModule)
  },
  {
    path: 'favorite-books',
    loadChildren: () => import('./favorite-books/favorite-books.module').then( m => m.FavoriteBooksPageModule)
  },
  {
    path: 'authors-modal',
    loadChildren: () => import('./authors-modal/authors-modal.module').then( m => m.AuthorsModalPageModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },
  {
    path: 'books-top',
    loadChildren: () => import('./books-top/books-top.module').then( m => m.BooksTopPageModule)
  },
 

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }