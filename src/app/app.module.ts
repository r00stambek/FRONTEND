import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NftsComponent } from './main-page/nfts/nfts.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { MyNftsComponent } from './main-page/my-nfts/my-nfts.component';
import { CreateNftComponent } from './main-page/create-nft/create-nft.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    SidebarComponent,
    NftsComponent,
    ProfileComponent,
    MyNftsComponent,
    CreateNftComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
