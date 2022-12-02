import { Component } from '@angular/core';
import { Game } from './game-item/game-item.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  games: Game[] = [
    { title: 'Battlefield', price: 59, image: "battlefield" },
    { title: 'Diablo', price: 49, image: "diablo" },
    { title: 'Warframe', price: 36, image: "warframe" }
  ]
  
  swapColours: boolean = false;
  showGameItemComponent: boolean = false;

  handleExpandContentClick(gamesContainer: HTMLElement): void {
    this.swapColours = this.swapColours ? false : true;
    console.log(gamesContainer.children)
  }

  handleSearchChange(event: any): void {
    console.log(event)
  }

  handleCreateOrDestroyGameItem(): void {
    this.showGameItemComponent = this.showGameItemComponent ? false: true;
    
  }

  searchText: string = 'Game';
}
