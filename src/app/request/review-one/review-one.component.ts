import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-one',
  templateUrl: './review-one.component.html',
  styleUrls: ['./review-one.component.css']
})
export class ReviewOneComponent implements OnInit {

  request!: Request;
  showVerify: boolean = false;
  showText: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  approve(): void {
    this.reqsvc.approve(this.request.id, this.request).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.router.navigateByUrl("/review/list")
      }, 
      error: (err) => {console.error(err)}
    });
  }

  confirm(): void {
    this.showVerify = true;
  }
  reject(): void {
    if (this.request.rejectionReason != null) {
      this.reqsvc.reject(this.request.id, this.request).subscribe({
        next:(res) => {
          console.debug("Request: ", res);
          this.router.navigateByUrl("/review/list")
        }, 
        error: (err) => {console.error(err)}
      });
    } else {
      this.showText = true;
    }
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.request = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
