import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'slide-title',
  templateUrl: './slide-title.component.html',
  styleUrls: ['./slide-title.component.scss']
})

export class SlideTitleComponent implements OnInit {
  @Input() text: string = ''
  @Input() strong: string = ''
  @Input() delay: number = 400
  @Input() animation

  animationActive: boolean = false

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.animation) {
      setTimeout(() => {
        this.animationActive = true
      }, this.delay)
    }
  }
}
