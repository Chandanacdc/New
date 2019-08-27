

import { Component, OnInit } from "@angular/core";
import { UserService } from "src/user/user.service";

@Component({
    selector: 'user',
    template:`
    <h2>User List</h2>
    <ul *ngFor="let user of users">
    <li>{{user.name}}</li>
    </ul>
`,
})
export class UserComponent implements OnInit{
     public users = [];
    constructor(private _userService: UserService) { }
    ngOnInit() {
       this._userService.getUsers()
        // .subscribe(data=>console.log(data))
        .subscribe(data=>this.users=data);
    }
   
    

}
