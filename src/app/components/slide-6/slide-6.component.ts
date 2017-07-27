import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-6',
  templateUrl: './slide-6.component.html',
  styleUrls: ['./slide-6.component.scss']
})

export class Slide6Component implements OnInit {
  @ViewChild('code1') code1: ElementRef
  @ViewChild('code2') code2: ElementRef
  @ViewChild('code3') code3: ElementRef

  animationActive: boolean = false

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => {
      if (step === 5) {
        setTimeout(() => {
          this.animationActive = true
          this.activeCode()
        }, 400)
      }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }

  activeCode() {
    setTimeout(() => {
      this.renderer.setElementClass(this.code1.nativeElement, 'slide-6__content__examples__code--active', true)
    }, 500)

    setTimeout(() => {
      this.renderer.setElementClass(this.code2.nativeElement, 'slide-6__content__examples__code--active', true)
    }, 600)

    setTimeout(() => {
      this.renderer.setElementClass(this.code3.nativeElement, 'slide-6__content__examples__code--active', true)
    }, 700)
  }
}
