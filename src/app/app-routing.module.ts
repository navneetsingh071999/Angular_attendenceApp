import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { DetailsComponent } from './MyComponent/details/details.component';
import { FrontComponent } from './MyComponent/front/front.component';


const routes: Routes = [
  {path: '', component: FrontComponent},
  {path: 'add', component: DetailsComponent},
  {path: 'about', component: AboutComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
