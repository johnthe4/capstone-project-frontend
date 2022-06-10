import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(
    private psvc: ProductService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/prod/create");
  }

  ngOnInit(): void {
    this.psvc.list().subscribe({
      next: (res) => {
        console.debug("Products: ",res);
        this.products = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
