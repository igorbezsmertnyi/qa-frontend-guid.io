import { Component } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  trakTranslate: number

  constructor(protected st: StateService) {
    this.st.currnetStep.subscribe(step => {
      this.trakTranslate = step * (-window.innerWidth + 55)
    })
  }
}
