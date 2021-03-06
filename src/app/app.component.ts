import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-english';
  public gameInProgress = true;
  public closureType: string;

  public closeGame(type: string): void {
    this.gameInProgress = false;
    this.closureType = type;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.closureType = undefined;
  }
}
