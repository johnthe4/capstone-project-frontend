import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Po } from '../po.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})
export class PoComponent implements OnInit {

  po!: Po;

  constructor(
    private vsvc: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.vsvc.getPo(id).subscribe({
      next:(res) => {
        console.debug("Po: ", res);
        this.po = res;
      },
      error: (err) => {console.error(err)}
    });
  }

}
