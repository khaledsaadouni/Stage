import {RouterModule, Routes} from "@angular/router";
import {JeuComponent} from "./jeu/jeu.component";
import {LoginComponent} from "./login/login.component";


const APP_ROUTING : Routes =[
  {path: 'game' ,component: JeuComponent},
  {path:'', component: LoginComponent}
  ]
export const ROUTING= RouterModule.forRoot(APP_ROUTING);
