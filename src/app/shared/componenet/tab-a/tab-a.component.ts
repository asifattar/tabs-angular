import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-a',
  templateUrl: './tab-a.component.html',
  styleUrls: ['./tab-a.component.scss']
})
export class TabAComponent implements OnInit {

  framwork : string = `Angular`
$Event: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickFramWork( val : string ) : void{
    this.framwork=val

  }
  mobile : string = 'iphone'

  onMobile(eve : Event){
    let innertext = (eve.target as HTMLElement).innerHTML.trim();
    console.log(innertext);
    this.mobile = innertext
  }

















}
