import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Rectangle} from "../Model/rectangle";

@Component({
  selector: 'app-taille',
  templateUrl: './taille.component.html',
  styleUrls: ['./taille.component.css']
})
export class TailleComponent implements OnInit {

  rows=0;
  cols=0;
  grid: Rectangle[][]=[] ;

  @Output() sendG=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  send(ro,col) {
    if(ro==0){
      this.cols=col;
    }
    if(col==0){
      this.rows=ro;
    }
    this.grid=[];
    for(let i=0;i<this.rows;i++){
      this.grid.push([]);
      for (let j=0;j<this.cols;j++){
        this.grid[i].push(new Rectangle( ));
      }
    }
    this.sendG.emit(this.grid)}



}
