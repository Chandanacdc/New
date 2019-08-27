import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "src/home/home.component";
import { LoginComponent } from "src/login/login.component";
import { LogoutComponent } from "src/logout/logout.component";
import { RegisterComponent } from "src/register/register.component";
import { UserService } from "src/user/user.service";
import { UserComponent } from "src/user/user.component";
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from "src/error/error.component";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,LogoutComponent,RegisterComponent,UserComponent,ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
