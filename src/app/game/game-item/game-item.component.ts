import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GameComponent } from '../game.component';

export interface Game {
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit, OnDestroy {
    @Input() gameSource!: Game;

    ngOnInit(): void {
      console.log('GameItemComponent created')
    }

    ngOnDestroy(): void {
      console.log('GameItemComponent destroyed')
    }
}
