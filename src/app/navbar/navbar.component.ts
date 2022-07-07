import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()status;
  constructor(private logged: LoginService,private router: Router) { }

  ngOnInit(): void {

  }
logout(){
    this.logged.logout();
  this.router.navigate(['']);
}
}
