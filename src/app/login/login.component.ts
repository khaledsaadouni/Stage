import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status;
  constructor(private router: Router,private logged: LoginService) { }

  ngOnInit(): void {this.logged.logout();
    this.status=this.logged.logged;
  }
  log(form){
    this.logged.loggin();
    this.router.navigate(['game']);
  }

}
