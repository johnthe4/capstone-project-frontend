import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors!: Vendor[];

  constructor(
    private vensvc: VendorService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/vend/create");
  }

  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug("Users: ",res);
        this.vendors = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
