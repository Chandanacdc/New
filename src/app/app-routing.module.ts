import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/login/login.component";
import { HomeComponent } from "src/home/home.component";
import { LogoutComponent } from "src/logout/logout.component";
import { RegisterComponent } from "src/register/register.component";
import { ErrorComponent } from "src/error/error.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'logout', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
