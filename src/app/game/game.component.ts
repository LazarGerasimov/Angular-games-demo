import { Component } from '@angular/core';

interface Game {
  title: string;
  price: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  games: Game[] = [
    { title: 'Battlefield', price: 59 },
    { title: 'Diablo', price: 49 },
    { title: 'Warframe', price: 36 }
  ]

  handleExpandContentClick(): void {
    alert('Expand clicked')
  }

}
