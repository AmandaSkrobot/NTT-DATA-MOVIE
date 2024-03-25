import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})





export class FavoriteComponent implements OnInit {

isFavorite = false; 
@Input() ID: any;
ArrayLocalStorage : string [] = []
value: any;



ngOnInit(): void {
  (console.log(this.value =  this.favoriteService.getItem(`${this.ID}`)));

}


constructor (
  private favoriteService: FavoriteService,

) {}



saveToLocalStorage(ID:string) {
    
          this.ArrayLocalStorage.push(ID);
          this.favoriteService.setItem(`${ID}`, 'true');
          this.isFavorite = true; 
  }

RemoveFromLocalStorage(ID:string) {
     
  
      let index = this.ArrayLocalStorage.indexOf(`${ID}`)
       this.favoriteService.removeItem(`${ID}`)
      this.isFavorite = false; 
 




}



}
