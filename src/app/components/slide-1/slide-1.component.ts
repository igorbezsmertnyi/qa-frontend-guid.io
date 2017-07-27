import { Component, OnInit } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-1',
  templateUrl: './slide-1.component.html',
  styleUrls: ['./slide-1.component.scss']
})

export class Slide1Component implements OnInit {

  constructor(private st: StateService) { }

  ngOnInit() { }

  start() {
    this.st.onStepChange(1)
  }
}
