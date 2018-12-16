import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public emptyHeart: string = '../../assets/empty-heart.png'
  public fullHeart: string = '../../assets/full-heart.png'

  constructor() { }

  ngOnInit() {
  }

}
