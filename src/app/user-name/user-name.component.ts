import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  userName: String = '';
  isUserNameBlank = true;

  constructor() { }

  ngOnInit() {
  }

  clearUsername() {
    this.userName = "";
    this.isUserNameBlank = true;
  }

  userNameChanged() {
    if (this.userName.length > 0) {
      this.isUserNameBlank = false;
    } else {
      this.isUserNameBlank = true;
    }
  }

}
