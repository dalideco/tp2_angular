import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ChildComponent } from './my-component/child/child.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { CvSelectorComponent } from './cv-selector/cv-selector.component';
import { CvItemComponent } from './cv-item/cv-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    CarteVisiteComponent,
    ChildComponent,
    CvListComponent,
    CvComponent,
    CvSelectorComponent,
    CvItemComponent
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
