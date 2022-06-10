import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  sortFn(col: string): void {
    if(col === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = col;
  }

  create(): void {
    this.router.navigateByUrl("/user/create");
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users: ",res);
        this.users = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
