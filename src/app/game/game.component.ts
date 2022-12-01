import { Component } from '@angular/core';

interface Game {
  title: string;
  price: number;
  image: string;
}

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

  handleExpandContentClick(gamesContainer: HTMLElement): void {
    this.swapColours = this.swapColours ? false : true;
    console.log(gamesContainer.children)
  }

  swapColours: boolean = false;

}
