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
    { title: 'Battlefield', price: 59, image: "" },
    { title: 'Diablo', price: 49, image: "" },
    { title: 'Warframe', price: 36, image: "" }
  ]

  handleExpandContentClick(): void {
    alert('Expand clicked')
  }

}
