import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  userInput:string;
  topics: string[];
  name:string;
  email;
  phone:number;
  topicsItem;
  preference;
  isChecked= false;
  obj={
    name:"",
    email:"",
    phone:"",
    topic:'',
  }
 
  constructor(private router:Router,private userService: LoginService) { 
    this.topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
    this.topicsItem =  this.topics[0];
  }

  ngOnInit(): void {
   // this.navigateToHome()
  }
 
  submitted(myForm:NgForm){
  
    this.isChecked = true
    this.obj.name = myForm.value.userDetail.name
    this.obj.email = myForm.value.userDetail.email
    this.obj.phone = myForm.value.userDetail.phone
    this.obj.topic = myForm.value.topic
 
    this.saveUserData() ;

    console.log( this.obj);
  }

  saveUserData() {
    const user = { name: this.obj.name, email: this.obj.email, phone: this.obj.phone,topics: this.obj.topic};
    this.userService.addUser(user).subscribe(
      (data) => {
        console.log('User data saved successfully!' + JSON.stringify(data));
        
        debugger
    this.userService.setData(JSON.stringify(data));
       this.router.navigateByUrl('/reactiveform', { queryParams: {data:JSON.stringify(data)} });

      },
      error => {
        console.error('Error saving user data:', error);
      }
    );
  }
 
}
