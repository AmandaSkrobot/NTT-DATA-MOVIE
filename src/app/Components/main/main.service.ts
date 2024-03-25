import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map, takeUntil } from "rxjs";
import { MovieData, Search } from "./main-model";



@Injectable({providedIn: 'root'})
export class MainService {

private url = ' https://www.omdbapi.com/?i='
ApiKey = '&apikey=8c68a1a3';
id = 'tt3896198';

constructor (
                private http: HttpClient,
             
    ) {}

getMoviebyTitle (query: string): Observable<MovieData[]> {

    return this.http.get<Search>(`${ this.url + this.id+ this.ApiKey}&s=${query}`).pipe((map(result => <MovieData[]>result.Search) ));
}

getMoviebyId(query:string) : Observable<MovieData> {

        return this.http.get<MovieData>(`${this.url +this.id+ this.ApiKey}&plot=full&i=${query}`)
}

}
