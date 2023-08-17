


import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  topics:any=[];
  topicsItem
  subscription;
  receivedData:any=[];
  abc;
  message;
  myReactiveForm:FormGroup
  gender
  constructor(private userService: LoginService,private route: ActivatedRoute,private location: Location,private platformLocation: PlatformLocation,private router:Router) { 

    this.topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
    this.topicsItem =  this.topics[0];
    this.gender=[{
      id:1,
      gender:'Male'
    },{
      id:2,
      gender:'Female'
    }]
   

  }

  ngOnInit() {
    
    // this.userService.currentMessage.subscribe(message => this.message = message)
    // this.message = JSON.parse(this.message)


    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'userName': new FormControl(null),
        'email': new FormControl(null,[Validators.required]),
        'password': new FormControl(null,[Validators.required]),
      }),
     
      'selectTopics':new FormControl(this.topics[2]),
      'gender': new FormControl("Male"),
      'checkBoxes':new FormControl(true),
      'skills':new FormArray([
        new FormControl(null,Validators.required)
      ]
        
      )
    })

  }
  onSubmit(){
    debugger
    console.log(this.myReactiveForm);
    const obj = {
      userName:this.myReactiveForm.value.userDetails.userName,
      email:this.myReactiveForm.value.userDetails.email
    }

    console.log(obj);
   // this.router.navigateByUrl('/productList')
   // this.router.navigateByUrl('/productList', );

 // this.router.navigate(['/productList'], { queryParams: obj });
  //this.router.navigateByUrl('/productList', { state: obj });
  //this.router.navigateByUrl(`/productList/${obj.userName}/${obj.email}`)
this.userService.setData(obj);
  this.router.navigate(['/productList'])
  }

  addSkills(){
    console.log('in')
  }

   addSkillControl() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
    
  }

  get skillsFormArray() {
    return this.myReactiveForm.get('skills') as FormArray;
  }
  // ngOnDestroy() {
  //   // Unsubscribe from the data subscription to prevent memory leaks
  //   this.message.unsubscribe();
  // }

}