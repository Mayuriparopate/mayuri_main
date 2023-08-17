import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productListdata:any;
  abc;
  constructor(private productList:LoginService,private activeroutes: ActivatedRoute,private userService: LoginService) { }

  ngOnInit(): void {
    // this.activeroutes.snapshot.queryParams.subscribe(params => {
    //   this.abc = params;
    //   console.log(this.abc.userName); // Access userName property
    // });

    // this.abc = this.activeroutes.snapshot.queryParamMap["params"].queryParams.obj

    // this.activeroutes.queryParams.subscribe(params => {
    //   if (params && params.obj) {
    //     this.abc = params.obj;
    //     console.log(this.abc.userName);
    //   } else {
    //     console.log('Query parameter "obj" not found.');
    //   }
    // });

    // this.activeroutes.queryParams.subscribe(params => {
    //   debugger
    //   console.log('Received data in target component:', params);
    //   this.abc = params;
    //  console.log(this.abc);
    //   // Use the received data as needed in this component
    // });
    debugger
 this.userService.currentMessage.subscribe(data=>{
  this.abc = data;
 })
    // this.activeroutes.queryParams.subscribe(params=>{
    //   this.abc = params;
    // })

   // this.abc = this.activeroutes.snapshot.queryParamMap['state'];
   // this.abc = this.activeroutes.snapshot.queryParamMap.get('state');
    console.log(this.abc); 

    this.productList.getProductList().subscribe((data)=>{
      debugger
      this.productListdata = data;
      console.log(this.productListdata);
    },error => {
     console.log(error);
    })

    // this.productList.getProductListPromices().then((data)=>{
    //   debugger
    //   var productListpromice = data;
    //   console.log(productListpromice); 
    // }).catch(err=>console.log(err))
  }

}
