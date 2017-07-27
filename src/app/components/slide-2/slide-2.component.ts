import { Component, OnInit } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-2',
  templateUrl: './slide-2.component.html',
  styleUrls: ['./slide-2.component.scss']
})

export class Slide2Component implements OnInit {
  animationActive: boolean = false
  cources = ['What is HTML?', 'HTML Bases', 'CSS Bases', 'CSS Units', 'Working With DevTools', 'Simple examples']

  constructor(private st: StateService) {
    this.st.currnetStep.subscribe(step => {
      if (step === 1) { this.animationActive = true }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }
}
