import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './Components/main/main.component';
import { CardComponent } from './Components/card/card.component';
import { CardDetailComponent } from './Components/card-detail/card-detail.component';
export const routes: Routes = [

    { path: '',    redirectTo: '/home',    pathMatch: 'full'  },
    { path: 'home', component: MainComponent },
   
    { path: 'card-detail/:id',      component:  CardDetailComponent },


    
];