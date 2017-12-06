import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { MyAppSpaComponent } from './my-app-spa/my-app-spa.component';
import { SpaServiceComponent } from './spa-service/spa-service.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAppSpaComponent,
    SpaServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    		{
    			path:'myappspa',
    			component: MyAppSpaComponent
    		},
    		{
    			path:'spaservice',
    			component:SpaServiceComponent

    		}
    	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
