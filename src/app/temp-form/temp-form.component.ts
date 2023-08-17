


import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss']
})
export class TempFormComponent implements OnInit {
  topics:any=[];
  topicsItem
  subscription;
  receivedData:any=[];
  abc;
  message;
  constructor(private userService: LoginService,private route: ActivatedRoute,private location: Location,private platformLocation: PlatformLocation) { 

    this.topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];
    this.topicsItem =  this.topics[0];
   

  }

  ngOnInit() {

    this.userService.currentMessage.subscribe(message => this.message = message)
    this.message = JSON.parse(this.message)

  }
 


}
