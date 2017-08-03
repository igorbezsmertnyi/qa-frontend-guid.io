import { Component, OnInit, HostListener, Renderer, ElementRef, ViewChild } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../code/code.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('prevBtn') prevBtn: ElementRef
  @ViewChild('nextBtn') nextBtn: ElementRef

  currnetStep: number = 0
  slideList: Array<string> = [
    'Start',
    '1.1 About Course',
    '1.2 About HTML',
    '1.3 About HTML',
    '2.1 HTML tag',
    '2.2 HTML tags structure',
    '2.3 HTML tags list',
    '3.1 CSS & CSS units',
    '3.2 CSS & CSS units',
    '3.3 CSS Units example',
		'4 CSS Selectors',
    '5 CSS Margin & Padding'
  ]

  constructor(private st: StateService,
              private renderer: Renderer) {
    this.st.currnetStep.subscribe(step => this.currnetStep = step)
  }

  ngOnInit() { }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e) {
    if (e.code == 'ArrowLeft' && this.currnetStep >= 1) {
      this.prevSlide()
    } else if (e.code == 'ArrowRight' &&
              this.currnetStep < this.slideList.length - 1) {
      this.nextSlide()
    } else if (e.code == 'Space' &&
              this.currnetStep < this.slideList.length - 1) {
      this.nextSlide()
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e) {
    if (e.code == 'ArrowLeft') {
      this.renderer.setElementClass(this.prevBtn.nativeElement, 'header__btn__prev--active', false)
    } else if (e.code == 'ArrowRight' || e.code == 'Space') {
      this.renderer.setElementClass(this.nextBtn.nativeElement, 'header__btn__next--active', false)
    }
  }

  onStepChange() {
    this.st.onStepChange(this.currnetStep)
  }

  nextSlide() {
    this.currnetStep = this.currnetStep + 1
    this.st.onStepChange(this.currnetStep)
    this.renderer.setElementClass(this.nextBtn.nativeElement, 'header__btn__next--active', true)
  }

  prevSlide() {
    this.currnetStep = this.currnetStep - 1
    this.st.onStepChange(this.currnetStep)
    this.renderer.setElementClass(this.prevBtn.nativeElement, 'header__btn__prev--active', true)
  }
}
