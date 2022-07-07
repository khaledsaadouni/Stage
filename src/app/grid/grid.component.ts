import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


  selected;
  old;
  @Input() grid;

  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";

  openPopup( s ) {
    this.displayStyle = "block";

    this.selected=s;
    this.old=this.selected.color;
  }

  cancel(){
    this.selected.color=this.old;
    this.closePopup();
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
