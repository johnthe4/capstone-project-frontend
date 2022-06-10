import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  login(): void {
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug(res);
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if (err.status == 404) {
          this.message = "Email or password is invalid!";
        } else {
          console.error(err);
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
