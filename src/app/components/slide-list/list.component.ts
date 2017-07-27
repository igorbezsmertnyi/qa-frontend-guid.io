import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'slide-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class SlideListComponent implements OnInit {
  @Input() animation
  @Input() delay: number = 600

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
