import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vend/list"),
    new Menu("Products", "/prod/list"),
    new Menu("Requests", "/req/list"),
    new Menu("Reviews", "/review/"),
    new Menu("Login", "/login")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
