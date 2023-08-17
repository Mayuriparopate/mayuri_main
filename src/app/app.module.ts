import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDirective } from './directives/login.directive';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TemDirectiveDirective } from './tem-directive.directive';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginDirective,
    ReactiveFormComponent,
    TempFormComponent,
    ProductListComponent,
    TemDirectiveDirective,
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
