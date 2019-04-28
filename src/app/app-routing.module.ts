import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddPage } from 'src/pages/add/add';
import { AuthorPage } from 'src/pages/author/author';
import { BookPage } from 'src/pages/book/book';
import { LoginPage } from 'src/pages/login/login';
import { SignupPage } from 'src/pages/signup/signup';
import { AccountPage } from 'src/pages/account/account';
import { MySeriesPage } from 'src/pages/my-series/my-series';

const routes: Routes = [
  { path: 'add', component: AddPage },
  { path: 'author', component: AuthorPage },
  { path: 'book', component: BookPage },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'account', component: AccountPage },
  { path: 'myseries', component: MySeriesPage },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
