import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-11',
  templateUrl: './slide-11.component.html',
  styleUrls: ['./slide-11.component.scss']
})

export class Slide11Component implements OnInit {
	@ViewChild('selectorAll') selectorAll: ElementRef
	@ViewChild('selectorClass') selectorClass: ElementRef
	@ViewChild('selectorId') selectorId: ElementRef
	@ViewChild('selectorTag') selectorTag: ElementRef

	@ViewChild('selectorAllTooltip') selectorAllTooltip: ElementRef
	@ViewChild('selectorClassTooltip') selectorClassTooltip: ElementRef
	@ViewChild('selectorIdTooltip') selectorIdTooltip: ElementRef
	@ViewChild('selectorTagTooltip') selectorTagTooltip: ElementRef

	animationActive: boolean = false
	selectAllRect: any
	selectClassRect: any
	selectIdRect: any
	selectTagRect: any

	constructor(private st: StateService,
							private renderer: Renderer) {
		this.st.currnetStep.subscribe(step => {
			if (step === 10) {
				setTimeout(() => {
					this.animationActive = true
					this.activeAnim()
					this.setTooltip()
					this.activeTooltips()
				}, 400)
			}
			else { this.animationActive = false }
		})
	}

  ngOnInit() {
		this.selectAllRect = this.selectorAll.nativeElement.getBoundingClientRect()
		this.selectClassRect = this.selectorClass.nativeElement.getBoundingClientRect()
		this.selectIdRect = this.selectorId.nativeElement.getBoundingClientRect()
		this.selectTagRect = this.selectorTag.nativeElement.getBoundingClientRect()
	}

	activeAnim() {
		setTimeout(() => {
			this.renderer.setElementClass(this.selectorAll.nativeElement, 'slide-11__content__col--active', true)
		}, 700)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorClass.nativeElement, 'slide-11__content__col--active', true)
		}, 800)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorId.nativeElement, 'slide-11__content__col--active', true)
		}, 900)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorTag.nativeElement, 'slide-11__content__col--active', true)
		}, 1000)
	}

	setTooltip() {
		this.selectorAllTooltip.nativeElement.style.top = `${(this.selectAllRect.height / 2) - 70}px`
		this.selectorAllTooltip.nativeElement.style.left = '-100px'

		this.selectorClassTooltip.nativeElement.style.top = `${(this.selectClassRect.height / 2) - 40}px`
		this.selectorClassTooltip.nativeElement.style.left = '-160px'

		this.selectorIdTooltip.nativeElement.style.top = `${(this.selectIdRect.height / 2) - 40}px`
		this.selectorIdTooltip.nativeElement.style.left = '-80px'

		this.selectorTagTooltip.nativeElement.style.top = `${(this.selectTagRect.height / 2) - 90}px`
		this.selectorTagTooltip.nativeElement.style.left = '40px'
	}

	activeTooltips() {
		setTimeout(() => {
			this.renderer.setElementClass(this.selectorAllTooltip.nativeElement, 'tooltip--active', true)
		}, 1300)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorClassTooltip.nativeElement, 'tooltip--active', true)
		}, 1400)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorIdTooltip.nativeElement, 'tooltip--active', true)
		}, 1500)

		setTimeout(() => {
			this.renderer.setElementClass(this.selectorTagTooltip.nativeElement, 'tooltip--active', true)
		}, 1600)
	}
}
