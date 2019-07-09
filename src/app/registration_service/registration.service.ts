import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user';

/* Http Options*/
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<User>{
    alert('FROM SERVICE!! :-)\n\n' + JSON.stringify(user, null, 4));
    return this.http.post<User>("/register",user,httpOptions)

  }
}
