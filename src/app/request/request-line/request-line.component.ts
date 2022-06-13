import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-line',
  templateUrl: './request-line.component.html',
  styleUrls: ['./request-line.component.css']
})
export class RequestLineComponent implements OnInit {

  request!: Request;

  constructor(
    private reqlsrvc: RequestlinesService,
    private reqsrvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  list(): void {
    this.router.navigateByUrl("/req/list");
  }

  review(): void {
    this.reqsrvc.review(this.request.id, this.request).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.request = res;
      },
      error: (err) => {console.error(err)}
    });
    this.router.navigateByUrl("/req/list");
  }

  delete(id: number): void {
    this.reqlsrvc.remove(id).subscribe({
      next:(res) => {
        console.debug("Removed: ", res);
        this.refresh();
      },
      error: (err) => {console.error(err)}
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.reqsrvc.get(id).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.request = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
