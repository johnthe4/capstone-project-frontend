import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  requests!: Request[];

  constructor(
    private reqsrvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.reqsrvc.getReviews(this.syssvc.user.id).subscribe({
      next: (res) => {
        console.debug("Requests: ", res);
        this.requests = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
