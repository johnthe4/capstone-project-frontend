import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors!: Vendor[];
  isadmin: boolean = false;

  constructor(
    private vensvc: VendorService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  create(): void {
    this.router.navigateByUrl("/vend/create");
  }

  ngOnInit(): void {
    this.isadmin = this.syssvc.user.isAdmin;
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors: ",res);
        this.vendors = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
