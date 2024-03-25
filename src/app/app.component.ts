import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContainerCardsComponent } from './Components/container-cards/container-cards.component';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { CardComponent } from './Components/card/card.component';
import { CardDetailComponent } from './Components/card-detail/card-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            HeaderComponent,
            MainComponent,
            FooterComponent,
            ContainerCardsComponent, 
            CardComponent,
            CardDetailComponent, 
            FavoriteComponent,
            FormsModule, 
            CommonModule,    
            AsyncPipe, RouterModule,
                                     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'ntt-data-movie';
}
