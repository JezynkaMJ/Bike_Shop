import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'bs-intro-basic',
  templateUrl: './intro-basic.component.html',
  styleUrls: ['./intro-basic.component.scss']
})
export class IntroBasicComponent implements OnInit {
  @Input() url: string;
  @Input() reverse: boolean;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
