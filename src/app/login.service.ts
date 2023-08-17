import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersFileUrl = 'assets/users.json'; 
  private productList = 'assets/productList.json'; 
  constructor(private http:HttpClient) { }
  usersData: any[] = []; 
  private userVal = new BehaviorSubject<string>("default message");
  currentMessage = this.userVal.asObservable();

  addUser(user: any): Observable<any> {
    return this.getAllUsers().pipe(
      map(()=> {
        this.usersData.push(user);
        return this.usersData;
      }),
    // switchMap(() => this.saveUsersToJson(this.usersData))
    );
  }


 getAllUsers(): Observable<any> {
    return this.http.get(this.usersFileUrl);
  }

  setData(datas){
    this.userVal.next(datas);
  }
  // getDataV(){
  //   return this.userVal.asObservable();
  // }


  // saveUsersToJson(users: any[]): Observable<any> {
  //   return this.http.put(this.usersFileUrl, JSON.stringify(users));
  // }

  getProductList():Observable<any>{
   return this.http.get(this.productList);
  // return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getProductListPromices():Promise<any>{
    debugger
    return fetch(this.productList)
   // return this.http.get(this.productList);
   // return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
}
