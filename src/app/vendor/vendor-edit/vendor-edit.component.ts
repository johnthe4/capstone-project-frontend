import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor;
  isAdmin: boolean = false;

  constructor(
    private vsvc: VendorService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("Before: ", this.vendor);
    this.vsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("After: ", res);
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
    let id: number = +this.route.snapshot.params["id"];
    this.vsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Vendor: ", res);
        this.vendor = res;
      },
      error:(err) => {
        console.debug(err);
      }
    })
  }

}
