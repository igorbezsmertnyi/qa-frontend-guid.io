import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'css-code',
  templateUrl: './css-code.component.html',
  styleUrls: ['./css-code.component.scss']
})

export class CssCodeComponent implements OnInit {
	@Input() selector:string = 'class'
	@Input() name: string
	@Input() content: Array<string> = []
	@Input() example: boolean = false

  constructor() { }

  ngOnInit() { }
}
