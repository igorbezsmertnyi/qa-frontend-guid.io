import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-9',
  templateUrl: './slide-9.component.html',
  styleUrls: ['./slide-9.component.scss']
})

export class Slide9Component implements OnInit {
  @ViewChild('col1') col1: ElementRef
  @ViewChild('col2') col2: ElementRef

  animationActive: boolean = false
  animationCol1: boolean = false
  animationCol2: boolean = false

  absolute: Array<string> = [
    'cm',
    'mm',
    'in - inches (1in = 96px = 2.54cm)',
    'px - pixels (1px = 1/96th of 1in)',
    'pt - points (1pt = 1/72 of 1in)',
    'pc - picas (1pc = 12 pt)'
  ]

  relative: Array<string> = [
    'em - Relative to the font-size of the element (2em means 2 times the size of the current font)',
    'ex - Relative to the x-height of the current font (rarely used)',
    'ch -	Relative to width of the "0" (zero)',
    'rem - Relative the root element',
    'vw -	Relative to 1% of the width of the viewport',
    'vh -	Relative to 1% of the height of the viewport',
    'vmin -	Relative to 1% of viewport\'s smaller dimension',
    'vmax -	Relative to 1% of viewport\'s larger dimension',
    '%'
  ]

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => {
      if (step === 8) {
        setTimeout(() => {
          this.animationActive = true
          this.activeAnimation()
        }, 400)
      }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }

  activeAnimation() {
    setTimeout(() => {
      this.animationCol1 = true
    }, 900)

    setTimeout(() => {
      this.animationCol2 = true
    }, 1200)
  }
}
