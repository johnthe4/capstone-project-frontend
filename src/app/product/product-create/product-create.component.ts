import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[];

  constructor(
    private psvc: ProductService,
    private vsvc: VendorService,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/prod/list");
  }

  save(): void {
    this.psvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product: ", res);
        this.router.navigateByUrl("/prod/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  ngOnInit(): void {
    this.vsvc.list().subscribe({
      next: (res) =>  {
        console.debug(res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
