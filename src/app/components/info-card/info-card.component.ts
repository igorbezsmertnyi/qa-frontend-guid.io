import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {
  @Input() animation: boolean = false
  animationActive: boolean = false

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.animation) {
      setTimeout(() => {
        this.animationActive = true
      }, 700)
    }
  }
}
