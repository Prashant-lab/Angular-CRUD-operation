import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient) { }

  getUsers(){
    return this.http.get(environment.baseUrl + 'users');
  }

  getUsersById(userId){
    return this.http.get(environment.baseUrl + 'users/' + userId);
  }

  deleteUser(userId){
    return this.http.delete(environment.baseUrl + 'users/' + userId)
  }

  addUser(user){
    return this.http.post(environment.baseUrl + 'users' , user)
  }

  editUser(user){
    return this.http.put(environment.baseUrl + 'users/'+ user.id , user)
  }
}
