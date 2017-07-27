import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent implements OnInit {
  @Input() tagName: string
  @Input() propClass: string
  @Input() propId: string
  @Input() propData: string
  @Input() propName: string
  @Input() someCode: string
  @Input() singleTag: boolean = false

  constructor() { }

  ngOnInit() { }
}
