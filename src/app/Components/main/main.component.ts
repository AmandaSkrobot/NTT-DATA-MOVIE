import { Component, OnInit, ElementRef, input } from "@angular/core";
import { MainService } from "./main.service";
import { QuoteComponent } from "../quote/quote.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MovieData } from "./main-model";
import { ContainerCardsComponent } from "../container-cards/container-cards.component";
import { Observable, Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";


import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../card/card.component";
import { CardDetailComponent } from "../card-detail/card-detail.component";
import { FavoriteComponent } from "../favorite/favorite.component";
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from "@angular/router";
@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    QuoteComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ContainerCardsComponent,
    RouterOutlet,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    FooterComponent,
    CardComponent,
    CardDetailComponent,
    FavoriteComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
  providers: [MainService],
})
export class MainComponent implements OnDestroy {
 
  movieItems$?: any;
  movieInput:string = '';
  moviesResult$?: MovieData[];
  sub?: Subscription;

  constructor(private mainService: MainService, private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnDestroy() {
 
    this.sub!.unsubscribe();
  }

  onInputChange() {
    this.movieInput = this.movieInput
    console.log(this.movieInput)
  }

  OnClick(movieInput:any) {
    console.log(movieInput);
  
    
      movieInput = this.movieInput;
      this.sub = this.mainService
        .getMoviebyTitle(movieInput)
        .subscribe((result) => {
          this.moviesResult$ = result;

          console.log(this.moviesResult$);
          console.log(("sdasdassad"));
        });
    
  }
}