import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request;
  showVerify: boolean = false;

  constructor(
    private rsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/req/list");
  }
  
  remove(): void {
    this.showVerify = !this.showVerify;
  }
  
  verify(): void {
    this.rsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request removed");
        this.router.navigateByUrl("/req/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.rsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.request = res;
      },
      error:(err) => {console.error(err);}
    });
  }

}
