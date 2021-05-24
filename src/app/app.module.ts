import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './MyComponent/details/details.component';
import { ListDetailsComponent } from './MyComponent/list-details/list-details.component';
import { AddDetailsComponent } from './MyComponent/add-details/add-details.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { FrontComponent } from './MyComponent/front/front.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListDetailsComponent,
    AddDetailsComponent,
    AboutComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
