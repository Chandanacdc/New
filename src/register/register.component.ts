import { Component } from "@angular/core";
import { User } from "src/register/register";
import { UserService } from "src/user/user.service";
import { NgForm } from "@angular/forms/forms";

@Component({
    selector: 'register-root',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css']
  
})
export class RegisterComponent {
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
