import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  myPassword: String = "Secret password = tuna";
  buttonClick: boolean = false;
  clicks = [];
  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.buttonClick = !this.buttonClick
    this.clicks.push(this.clicks.length + 1);
  }

  passwordStatus() {
    if (this.buttonClick) {
        return "white";
    } else {
      return "red";
    }


  }

}
