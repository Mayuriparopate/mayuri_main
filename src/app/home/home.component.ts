import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userInput: string;
  userList: any = [];
  isSelected = false;
  userListLength = 0;
  remainingLength = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {
    if (this.userInput.trim() != null) {
      console.log(this.userInput);
      this.userList.push({ value: this.userInput, isSelectedval: false })
      this.userInput = '';
      this.userListLength = this.userList.length;
      var remainingLength = this.userList.filter((item) => item.isSelectedval === false);

      this.remainingLength = remainingLength.length;
    }



  }
  isStrike(isSelectedItem, index) {

    this.userList[index].isSelectedval = !isSelectedItem.isSelectedval;
    this.isSelected = this.userList[index].isSelectedval
    var remainingLength = this.userList.filter((item) => item.isSelectedval === false);

    this.remainingLength = remainingLength.length;
  }

  login() {
    this.router.navigateByUrl('/login');
  }
  reactiveForm() {
    this.router.navigateByUrl('/reactiveform');
  }
  userListData() {
    this.router.navigateByUrl('/productList');
  }
}
