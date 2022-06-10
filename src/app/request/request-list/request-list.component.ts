import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests!: Request[];

  constructor(
    private rsvc: RequestService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/req/create");
  }

  ngOnInit(): void {
    this.rsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests: ",res);
        this.requests = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
