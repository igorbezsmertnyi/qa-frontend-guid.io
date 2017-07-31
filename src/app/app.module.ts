import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdButtonModule, MdCheckboxModule,
         MdSelectModule } from '@angular/material'
import { HttpModule } from '@angular/http'

import { AppComponent } from './containers/app/app.component'
import { HeaderComponent } from './components/header/header.component'
import { CodeComponent } from './components/code/code.component'
import { SlideListComponent } from './components/slide-list/list.component'
import { SlideTitleComponent } from './components/slide-title/slide-title.component'
import { InfoCardComponent } from './components/info-card/info-card.component'
import { CssCodeComponent } from './components/css-code/css-code.component'

import { Slide1Component } from './components/slide-1/slide-1.component'
import { Slide2Component } from './components/slide-2/slide-2.component'
import { Slide3Component } from './components/slide-3/slide-3.component'
import { Slide4Component } from './components/slide-4/slide-4.component'
import { Slide5Component } from './components/slide-5/slide-5.component'
import { Slide6Component } from './components/slide-6/slide-6.component'
import { Slide7Component } from './components/slide-7/slide-7.component'
import { Slide8Component } from './components/slide-8/slide-8.component'
import { Slide9Component } from './components/slide-9/slide-9.component'
import { Slide10Component } from './components/slide-10/slide-10.component'
import { Slide11Component } from './components/slide-11/slide-11.component'

import { StateService } from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodeComponent,
    Slide1Component,
    Slide2Component,
    SlideListComponent,
    SlideTitleComponent,
    Slide3Component,
    Slide4Component,
    Slide5Component,
    Slide6Component,
    Slide7Component,
    Slide8Component,
    InfoCardComponent,
    Slide9Component,
    Slide10Component,
    Slide11Component,
    CssCodeComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    FormsModule
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
