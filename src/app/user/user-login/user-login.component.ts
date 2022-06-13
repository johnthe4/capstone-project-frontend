import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private usersvc: UserService,
    private router: Router,
    private syssvc: SystemService
  ) { }

  login(): void {
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug(res);
        this.syssvc.user = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if (err.status == 404) {
          this.message = "Username or password is invalid!";
        } else {
          console.error(err);
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
