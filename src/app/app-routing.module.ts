import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import {LoginRegisterComponent} from "./login-register/login-register.component";

import { NftsComponent } from './main-page/nfts/nfts.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { MyNftsComponent } from './main-page/my-nfts/my-nfts.component';
import { CreateNftComponent } from './main-page/create-nft/create-nft.component';
import {LoginComponent} from "./login-register/login/login.component";
import {RegisterComponent} from "./login-register/register/register.component";




const routes: Routes = [
  { path: '', redirectTo: '/nfts', pathMatch: 'full' }, // Перенаправление на главную страницу
  { path: 'main-page', component: MainPageComponent },
  { path: '',
  component: MainPageComponent,
  children: [
    { path: 'create-nft', component: CreateNftComponent },
    { path: 'my-nfts', component: MyNftsComponent },
    { path: 'nfts', component: NftsComponent },
    { path: 'profile', component: ProfileComponent },
]
},
  { path: 'login-register', component: LoginRegisterComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
