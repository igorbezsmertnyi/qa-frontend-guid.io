import { Component, OnInit } from '@angular/core'
import { StateService } from '../../app.state'

@Component({
  selector: 'slide-3',
  templateUrl: './slide-3.component.html',
  styleUrls: ['./slide-3.component.scss']
})

export class Slide3Component implements OnInit {
  animationActive: boolean = false
  bases = ['HTML - Hypertext Markup Language. This is the standard markup language for creating web pages and web applications.',
           'HTML is a part of SGML (the standard generic markup language)',
           'Most web pages contain an HTML markup (or XHTML) description. The HTML language is interpreted by browsers; The resulting formatted text is displayed on the monitor of the computer or mobile device.',
           'There are also other markup languages SGML XHTML DHTML MHTML (short for MIME HTML) is the archive format of web pages used to combine HTML code and resources, which are usually represented as external links in a single file.']

  constructor(private st: StateService) {
    this.st.currnetStep.subscribe(step => {
      if (step === 2) { this.animationActive = true }
      else { this.animationActive = false }
    })
  }

  ngOnInit() { }

}
