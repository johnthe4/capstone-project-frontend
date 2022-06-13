import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestlines.class';
import { RequestlinesService } from '../requestlines.service';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {
  
  requestLine: RequestLine = new RequestLine();
  products!: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reqlsvc: RequestlinesService,
    private psvc: ProductService
  ) { }

  list(): void {
    this.router.navigateByUrl(`/req/lines/${this.requestLine.requestId}`);
  }

  save(): void {
    console.debug("Before: ", this.requestLine);
    this.reqlsvc.change(this.requestLine).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl(`/req/lines/${this.requestLine.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  ngOnInit(): void {
    this.psvc.list().subscribe({
      next: (res) => {
        console.debug("Products: ",res);
        this.products = res;
      },
      error: (err) => {console.error(err)}
    });

    this.requestLine.requestId = +this.route.snapshot.params["id"];

    this.reqlsvc.get(this.requestLine.requestId).subscribe({
      next: (res) => {
        console.debug("RequestLine: ",res);
        this.requestLine = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
