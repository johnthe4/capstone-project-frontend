import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  user!: User;

  constructor(
    private syssvc: SystemService,
    private rsvc: RequestService,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/req/list");
  }

  save(): void {
    this.rsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request: ", res);
        this.router.navigateByUrl("/req/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  ngOnInit(): void {
    this.user = this.syssvc.user;
    this.request.userId = this.syssvc.user.id;
    this.request.rejectionReason = "";
  }

}
