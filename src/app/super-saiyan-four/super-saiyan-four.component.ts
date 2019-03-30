import { Component, OnInit , Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit, OnChanges {
	@Input() initialPower;
	superSaiyanFourPower:number
  constructor() { }

  ngOnInit() {
  } ngOnChanges(){
  	this.superSaiyanFourPower = this.initialPower*500
  }

}
