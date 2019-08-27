import { Component } from "@angular/core";
import { NgForm } from "@angular/forms/forms";

import { UserService } from "src/user/user.service";
import { IUser } from "src/user/user";
import { User } from "src/login/login";
@Component({
    selector: 'login-root',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
  
})
export class LoginComponent {
    user= new User();
    constructor(private _userService: UserService) { }
    getUsers(userForm:NgForm):void {
        console.log("user")
        console.log(userForm.value)
       this._userService.getUsers().subscribe
        // (data=> console.log(data))
        (data => console.log(JSON.stringify(data)))
    //    .subscribe(data=>this.users=data);
    }
}

