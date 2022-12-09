import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  aboutDiv: boolean = true;
  howCanWeHelpDiv: boolean = false;

  showAbout() {
    this.howCanWeHelpDiv = false;
    this.aboutDiv = true;
  }

  showHowCanWeHelpDiv() {
    this.aboutDiv = false;
    this.howCanWeHelpDiv = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
