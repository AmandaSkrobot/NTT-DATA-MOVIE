import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieData } from "../main/main-model";

@Injectable({ providedIn: "root" })
export class MainService {
  private url = " http://www.omdbapi.com/?i=";
  ApiKey = "&apikey=8c68a1a3";
  id = "tt3896198";

  constructor(private http: HttpClient) {}

  getMoviebyId(query: string): Observable<MovieData> {
    return this.http.get<MovieData>(
      `${this.url + this.id + this.ApiKey}&plot=full&i=${query}`
    );
  }
}
