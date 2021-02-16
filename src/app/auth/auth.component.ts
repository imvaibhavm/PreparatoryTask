import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { WebexService } from "../webex.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private webex: WebexService, private router: Router) {}

  ngOnInit() {
    this.webex.onBeforeLogin()
  }

  onLogin() {
    this.webex.onLogin()
  }

  onNavRooms() {
    this.router.navigate(['/rooms'])
  }

  ngOnDestroy() {

  }
}
