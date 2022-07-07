import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JeuComponent } from './jeu/jeu.component';
import { GridComponent } from './grid/grid.component';
import { TailleComponent } from './taille/taille.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {ROUTING} from "./app.routing";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JeuComponent,
    GridComponent,
    TailleComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
