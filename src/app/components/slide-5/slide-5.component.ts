import { Component, OnInit, ViewChild, ViewChildren, Renderer, ElementRef, QueryList } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-5',
  templateUrl: './slide-5.component.html',
  styleUrls: ['./slide-5.component.scss', '../code/code.component.scss']
})

export class Slide5Component implements OnInit {
  @ViewChildren('tagBracket') tagBracket: QueryList<any>
  @ViewChildren('tagName') tagName: QueryList<any>

  @ViewChild('tagClose') tagClose: ElementRef
  @ViewChild('tag') tag: ElementRef
  @ViewChild('ToolpitTag') ToolpitTag: ElementRef
  @ViewChild('ToolpitBrackets') ToolpitBrackets: ElementRef
  @ViewChild('ToolpitTagName') ToolpitTagName: ElementRef
  @ViewChild('ToolpitTagClose') ToolpitTagClose: ElementRef

  animationTag: boolean = false
  animationTooltip: boolean = false

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => {
      if (step === 4) {
        setTimeout(() => {
          this.animationTag = true
          this.activateTooltips()
        }, 400)
      }
      else { this.animationTag = false }
    })
  }

  ngOnInit() {
    const codeRect = this.tag.nativeElement.getBoundingClientRect()

    this.ToolpitBrackets.nativeElement.style.top = `${codeRect.top - (codeRect.height / 4) + 10}px`
    this.ToolpitBrackets.nativeElement.style.left = `${(window.innerWidth / 2) - (codeRect.width / 2) - 120}px`

    this.ToolpitTag.nativeElement.style.width = `${codeRect.width + 60}px`
    this.ToolpitTag.nativeElement.style.height = `${codeRect.height + 25}px`
    this.ToolpitTag.nativeElement.style.top = `${(window.innerHeight / 2) - (codeRect.width / 2) + 30}px`
    this.ToolpitTag.nativeElement.style.left = `${(window.innerWidth / 2) - (codeRect.width / 2) - 70}px`

    this.ToolpitTagName.nativeElement.style.top = `${(window.innerHeight / 2) - (codeRect.width / 2) - 60}px`
    this.ToolpitTagName.nativeElement.style.left = `${(window.innerWidth / 2) - (codeRect.width / 2) - 23}px`

    this.ToolpitTagClose.nativeElement.style.top = `${codeRect.top - (codeRect.height / 2 ) + 7}px`
    this.ToolpitTagClose.nativeElement.style.right = `${(window.innerWidth / 2) - (codeRect.width / 2) - 195}px`
  }

  activateTooltips() {
    if (this.animationTag) {
      setTimeout(() => {
        this.renderer.setElementClass(this.ToolpitBrackets.nativeElement, 'tooltip--active', true)
      }, 1000)

      setTimeout(() => {
        this.renderer.setElementClass(this.ToolpitTag.nativeElement, 'tooltip--active', true)
      }, 1100)

      setTimeout(() => {
        this.renderer.setElementClass(this.ToolpitTagName.nativeElement, 'tooltip--active', true)
      }, 1200)

      setTimeout(() => {
        this.renderer.setElementClass(this.ToolpitTagClose.nativeElement, 'tooltip--active', true)
      }, 1300)
    }
  }

  bracketsActive() {
    this.tagBracket.forEach(bracket => this.renderer.setElementClass(bracket.nativeElement, 'code__bracket--hover', true))
  }

  bracketsDisactive() {
    this.tagBracket.forEach(bracket => this.renderer.setElementClass(bracket.nativeElement, 'code__bracket--hover', false))
  }

  tagNameActive() {
    this.tagName.forEach(tag => this.renderer.setElementClass(tag.nativeElement, 'code__name--hover', true))
  }

  tagNameDisactive() {
    this.tagName.forEach(tag => this.renderer.setElementClass(tag.nativeElement, 'code__name--hover', false))
  }

  tagActive() {
    this.renderer.setElementClass(this.ToolpitTag.nativeElement, 'slide-5__tooltip--tag--hover', true)
  }

  tagDisative() {
    this.renderer.setElementClass(this.ToolpitTag.nativeElement, 'slide-5__tooltip--tag--hover', false)
  }

  closeActive() {
    this.renderer.setElementClass(this.tagClose.nativeElement, 'code__slash--hover', true)
  }

  closeDisactive() {
    this.renderer.setElementClass(this.tagClose.nativeElement, 'code__slash--hover', false)
  }
}
