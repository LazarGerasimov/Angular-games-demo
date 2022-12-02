import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
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
export class GameItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
    @Input() gameSource!: Game;

    ngOnInit(): void {
      console.log('GameItemComponent created');
    }

    ngDoCheck(): void {
      console.log('GameItemComponent checking');
      
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('GameItem Component input changes', changes);
    }

    ngOnDestroy(): void {
      console.log('GameItemComponent destroyed')
    }
}
