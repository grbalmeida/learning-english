import { Component, OnInit } from '@angular/core';
import {Heart} from '../shared/heart.model'

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public emptyHeart: string = '../../assets/empty-heart.png'
  public fullHeart: string = '../../assets/full-heart.png'
  public hearts: Array<Heart> = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]

  constructor() { }

  ngOnInit() {
  }

}
