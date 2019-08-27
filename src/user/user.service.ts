import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from "src/user/user";
import { Observable } from "rxjs";
import { tap } from "rxjs/internal/operators/tap";

@Injectable()
export class UserService{
    private url: string="/assets/data/user.json";
    constructor(private http:HttpClient){}
    getUsers(): Observable<IUser[]>{
        return this.http.get<IUser[]>(this.url)
       .pipe(tap(data=>console.log(JSON.stringify(data))));
    }
}