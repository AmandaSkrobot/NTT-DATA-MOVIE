import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { CardComponent } from './Components/card/card.component';
import { CardDetailComponent } from './Components/card-detail/card-detail.component';
const appRoutes: Routes = [

    { path: '', component: MainComponent },


];





@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}