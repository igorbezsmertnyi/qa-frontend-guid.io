import { Component, OnInit } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-4',
  templateUrl: './slide-4.component.html',
  styleUrls: ['./slide-4.component.scss']
})

export class Slide4Component implements OnInit {
  animationActive: boolean = false

  constructor(private st: StateService) {
    this.st.currnetStep.subscribe(step => {
      if (step === 3) {
        setTimeout(() => {
          this.animationActive = true
        }, 400)
      }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }

}
