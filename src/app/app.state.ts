import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class StateService {

  _currentStep= new Subject<number>()
  currnetStep = this._currentStep.asObservable()
  onStepChange(step:number = 0) {
    this._currentStep.next(Number(step))
  }
}
