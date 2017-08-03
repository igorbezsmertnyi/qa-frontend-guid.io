import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-12',
  templateUrl: './slide-12.component.html',
  styleUrls: ['./slide-12.component.scss']
})

export class Slide12Component implements OnInit {
  @ViewChild('margin') margin: ElementRef
  @ViewChild('padding') padding: ElementRef

  paddR: number = 15
  paddT: number = 40
  paddB: number = 40
  paddL: number = 15

  marR: number = 15
  marT: number = 40
  marB: number = 40
  marL: number = 15

  timer: number = 0

  animationActive: boolean = false
  controlAnim: boolean = false
  exampleAnim: boolean = false

  constructor(private st: StateService,
              private renderer: Renderer) {
		this.st.currnetStep.subscribe(step => {
			if (step === 11) {
				setTimeout(() => {
					this.animationActive = true
          this.activeAnim()
				}, 400)
			}
			else { this.animationActive = false }
		})
	}

  ngOnInit() { }

  activeAnim() {
    setTimeout(() => {
      this.exampleAnim = true
    }, 900)

    setTimeout(() => {
      this.controlAnim = true
    }, 1000)
  }

  marginOver() {
    this.renderer.setElementClass(this.margin.nativeElement, 'slide-12__content__margin--active', true)
  }

  marginLeave() {
    this.renderer.setElementClass(this.margin.nativeElement, 'slide-12__content__margin--active', false)
  }

  paddingOver() {
    this.renderer.setElementClass(this.padding.nativeElement, 'slide-12__content__padding--active', true)
  }

  paddingLeave() {
    this.renderer.setElementClass(this.padding.nativeElement, 'slide-12__content__padding--active', false)
  }
}
