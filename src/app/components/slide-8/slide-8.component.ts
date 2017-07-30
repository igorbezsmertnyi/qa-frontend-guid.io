import { Component, OnInit } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-8',
  templateUrl: './slide-8.component.html',
  styleUrls: ['./slide-8.component.scss']
})

export class Slide8Component implements OnInit {
  animationActive: boolean = false

  constructor(private st: StateService) {
    this.st.currnetStep.subscribe(step => {
      if (step === 7) {
        setTimeout(() => {
          this.animationActive = true
        }, 400)
      }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }
}
