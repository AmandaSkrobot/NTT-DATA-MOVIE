import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { CardComponent } from './Components/card/card.component';
import { CardDetailComponent } from './Components/card-detail/card-detail.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
     AppRoutingModule,
    CardComponent,
    CardDetailComponent
  ],
  declarations: [
    AppComponent,
    MainComponent,CardComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
