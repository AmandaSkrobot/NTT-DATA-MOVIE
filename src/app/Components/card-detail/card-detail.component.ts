import { Component, OnDestroy, OnInit } from "@angular/core";
import { MovieData } from "../main/main-model";
import { Input } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from "@angular/router";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";
import { Subscription } from "rxjs";
import { CardService } from "../card/card.service";
import { MainComponent } from "../main/main.component";

@Component({
  selector: "app-card-detail",
  standalone: true,
  imports: [CommonModule, CardComponent, RouterOutlet, MainComponent],
  templateUrl: "./card-detail.component.html",
  styleUrl: "./card-detail.component.css",
})
export class CardDetailComponent implements OnInit, OnDestroy {
  containerDetail: boolean = false;
  @Input() moviesResult$?: MovieData[];

  @Input() movieItems$: any;
  @Input() routeID$?: any;
  @Input() resultadoArrayMovies?: MovieData[];
  public result: MovieData | undefined;
  Subscribe?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit() {
  
 
    this.routeID$ = this.route.snapshot.params["imdbID"];
    this.Subscribe = this.cardService
      .getMoviebyId(this.routeID$)
      .subscribe((ID) => {
        this.result = ID;
      });
  }

  ngOnDestroy() {
    this.Subscribe?.unsubscribe();
  }
}
