import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  isAdmin: boolean = false;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
    ) { }

    
  save(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User: ", res);
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  list(): void {
    this.router.navigateByUrl("/user/list");
  }

  ngOnInit(): void {
    this.isAdmin = this.syssvc.isAdmin();
  }

}
