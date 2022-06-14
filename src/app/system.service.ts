import { Injectable } from '@angular/core';
import { User } from './user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  
  user!: User;

  isAdmin(): boolean {
    return this.user.isAdmin;
  }

  constructor() { }
}
