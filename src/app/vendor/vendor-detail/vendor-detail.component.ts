import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;
  showVerify: boolean = false;
  isadmin: boolean = false;

  constructor(
    private vsvc: VendorService,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  list(): void {
    this.router.navigateByUrl("/vend/list");
  }
  
  remove(): void {
    this.showVerify = !this.showVerify;
  }
  
  verify(): void {
    this.vsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor removed");
        this.router.navigateByUrl("/vend/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.isadmin = this.syssvc.user.isAdmin;
    let id: number = +this.route.snapshot.params["id"];
    this.vsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Vendor: ", res);
        this.vendor = res;
      },
      error:(err) => {console.error(err);}
    });
  }

}
