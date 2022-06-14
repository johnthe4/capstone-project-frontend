import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;
  isAdmin: boolean = false;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("Before: ", this.user);
    this.usersvc.change(this.user).subscribe({
      next: (res) => {
        console.debug("After: ", res);
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
    let id: number = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next:(res) => {
        console.debug("User: ", res);
        this.user = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
