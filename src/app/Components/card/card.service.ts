import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { MovieData } from "../main/main-model";

@Injectable({ providedIn: "root" })
export class CardService {
  private url = " http://www.omdbapi.com/?apikey=";
  ApiKey = "8c68a1a3";
  itemsResults: any;

  constructor(private http: HttpClient) {}

  getMoviebyId(query: string): Observable<MovieData> {
    return this.http.get<MovieData>(
      `${this.url + this.ApiKey}&plot=full&i=${query}`
    );
  }
}
