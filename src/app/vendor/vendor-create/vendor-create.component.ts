import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  isAdmin: boolean = false;

  constructor(
    private vsvc: VendorService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  save(): void {
    this.vsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor: ", res);
        this.router.navigateByUrl("/vend/list");
      },
      error: (err) => {console.error(err)}
    });
  }

  list(): void {
    this.router.navigateByUrl("/vend/list");
  }

  ngOnInit(): void {
    this.isAdmin = this.syssvc.isAdmin();
  }

}
