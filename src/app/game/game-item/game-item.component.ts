import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameComponent } from '../game.component';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit, OnDestroy {
    game: any;

    ngOnInit(): void {
      console.log('GameItemComponent created')
    }

    ngOnDestroy(): void {
      console.log('GameItemComponent destroyed')
    }
}
