import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-10',
  templateUrl: './slide-10.component.html',
  styleUrls: ['./slide-10.component.scss']
})

export class Slide10Component implements OnInit {
  @ViewChild('text') text: ElementRef
  @ViewChild('div') div: ElementRef

  animationActive: boolean = false
  activeExample: boolean = false
  activeEdit: boolean = false

  fontSize: number = 32
  fontUnit: string = 'px'
  divSize: number = 50
  divUnit: string = '%'

  units: Array<string> = ['px', '%', 'pt', 'cm', 'mm', 'in', 'pc', 'em', 'rem', 'ex', 'ch', 'vw', 'vh', 'vmin', 'vmax']

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => {
      if (step === 9) {
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
      this.activeExample = true
    }, 800)

    setTimeout(() => {
      this.activeEdit = true
    }, 900)
  }
}
