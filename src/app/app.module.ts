import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ChildComponent } from './my-component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    CarteVisiteComponent,
    ChildComponent
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
