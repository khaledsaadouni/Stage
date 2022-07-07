import {Component, OnInit, Output} from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {


status;
  grid ;
  constructor(private logged: LoginService) { }

  ngOnInit(): void {
    this.logged.loggin()
    this.status=this.logged.logged;
  }
  getG(r){
    this.grid=r;
  }

}
