import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestlines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {
  
  baseurl: string = "http://localhost:5276/api/requestlines"

  constructor(
    private http: HttpClient
  ) { }

  get(id: number) : Observable<RequestLine> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }

  change(exp: RequestLine) : Observable<any> {
    return this.http.put(`${this.baseurl}/${exp.id}`, exp) as Observable<any>;
  }

  create(exp: RequestLine) : Observable<RequestLine> {
    return this.http.post(`${this.baseurl}`, exp) as Observable<RequestLine>;
  }

  remove(id: number) : Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
