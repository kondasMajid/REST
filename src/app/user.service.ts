import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  createUser(user: User) {
    console.log('User Name: ' + user.name);
    console.log('email: ' + user.email);
  }
  
  constructor() { }
}
