import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], search: string = ""): User[] {
    if(search.length == 0) {
      return users;
    }
    search = search.toLowerCase();
    let selectedUsers: User[] = [];
    for(let u of users) {
      if(u.firstname.toLowerCase().includes(search)) {
        selectedUsers.push(u);
      }
    }

    return selectedUsers;
  }

}
