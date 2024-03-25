import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Input } from '@angular/core';
import { MovieData } from '../main/main-model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-cards',
  standalone: true,
  imports: [CardComponent,RouterOutlet],
  templateUrl: './container-cards.component.html',
  styleUrl: './container-cards.component.css'
})
export class ContainerCardsComponent  {


  @Input() moviesResult$?: MovieData[] ;

}



