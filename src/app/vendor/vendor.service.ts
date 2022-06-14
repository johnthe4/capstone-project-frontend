import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Po } from './po.class';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string = "http://localhost:5276/api/vendors"

  constructor(
    private http: HttpClient
  ) { }

  getPo(id: number): Observable<Po> {
    return this.http.get(`${this.baseurl}/po/${id}`) as Observable<Po>;
  }

  list() : Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }

  get(id: number) : Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }

  create(ven: Vendor) : Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, ven) as Observable<Vendor>;
  }
  
  change(ven: Vendor) : Observable<any> {
    return this.http.put(`${this.baseurl}/${ven.id}`, ven) as Observable<any>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
