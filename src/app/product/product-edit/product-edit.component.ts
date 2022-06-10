import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;

  constructor(
    private pvsc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("Before: ", this.product);
    this.pvsc.change(this.product).subscribe({
      next: (res) => {
        console.debug("After: ", res);
        this.router.navigateByUrl("/prod/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  list(): void {
    this.router.navigateByUrl("/prod/list");
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.pvsc.get(id).subscribe({
      next:(res) => {
        console.debug("Product: ", res);
        this.product = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
