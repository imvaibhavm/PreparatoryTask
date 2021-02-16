import { Component, OnInit } from '@angular/core';
import { WebexService } from './webex.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'webex-prep';

  constructor(private webex: WebexService) {}

}
