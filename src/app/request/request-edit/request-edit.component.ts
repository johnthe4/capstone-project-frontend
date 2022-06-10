import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request!: Request;

  constructor(
    private rsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("Before: ", this.request);
    this.rsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl("/req/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  list(): void {
    this.router.navigateByUrl("/req/list");
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.rsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.request = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
