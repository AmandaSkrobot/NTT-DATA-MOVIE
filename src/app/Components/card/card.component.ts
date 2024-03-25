import { Component, OnInit, input } from "@angular/core";
import { Input } from "@angular/core";
import { MovieData } from "../main/main-model";
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from "@angular/router";
import { CardService } from "./card.service";
import { CardDetailComponent } from "../card-detail/card-detail.component";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { FavoriteComponent } from "../favorite/favorite.component";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CardDetailComponent,
    CommonModule,
    FavoriteComponent,
  ],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input() moviesResult$?: MovieData[];

  movieItems$?: any;

  routeID$?: string;
  Subscribe?: Subscription;
  container: boolean = true;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.container = true;

    this.Subscribe = this.route.params.subscribe((params: any) => {
      this.routeID$ = params["imdbID"];
    });
  }

  OnClick(MovieID$: string) {
    if (MovieID$) {
      console.log((this.movieItems$ = this.routeID$));

      this.cardService.getMoviebyId(MovieID$).subscribe((ID) => {
        this.routeID$ = MovieID$;
        console.log((this.movieItems$ = ID));
     
        this.container = false;
      });
    }
  }

  ngOnDestroy() {
    this.Subscribe?.unsubscribe();
  }
}

 
  

