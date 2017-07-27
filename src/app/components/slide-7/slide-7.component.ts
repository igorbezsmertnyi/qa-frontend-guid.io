import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-7',
  templateUrl: './slide-7.component.html',
  styleUrls: ['./slide-7.component.scss']
})

export class Slide7Component implements OnInit {
  @ViewChild('list') list: ElementRef

  animationActive: boolean = false

  tagList = [
    'article', 'aside', 'base', 'b', 'bdi', 'bdo', 'blockquote', 'figure', 'figcaption',
    'cite', 'datalist', 'details', 'i', 'wbr', 'em', 'kbd', 'mark', 'meter',
    'video', 'audio', 'abbr', 'address', 'area', 'map', 'embed', 'fieldset', 'legend'
  ]

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => {
      if (step === 6) {
        setTimeout(() => {
          this.animationActive = true
          this.activeList()
        }, 400)
      }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }

  activeList() {
    setTimeout(() => {
      this.renderer.setElementClass(this.list.nativeElement, 'slide-7__content__list--active', true)
    }, 500)
  }
}
