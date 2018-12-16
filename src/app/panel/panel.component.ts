import {Component, OnInit} from '@angular/core'
import {Phrase} from '../shared/phrase.model'
import PHRASES from './phrases-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public instruction: string = 'Traduza a frase:'
  public phrases: Array<Phrase> = PHRASES
  public currentIndex: number
  public ratios: Array<number>
  public currentPhrase: Phrase
  public response: string

  constructor() { 
    this.ratios = []
    this.setCurrentIndex()
    this.setCurrentPhrase()
  }

  ngOnInit() {
  }

  public getRandomIndex(): number {
    const min = 0
    const max = this.phrases.length - 1
    const newIndex: number = Math.floor(Math.random() * max) + min

    if(!this.ratios.includes(newIndex)) {
      this.ratios.push(newIndex)
      return newIndex
    }

    this.getRandomIndex()
  }

  public setCurrentPhrase(): void {
    this.currentPhrase = this.phrases[this.currentIndex]
  }

  public setCurrentIndex(): void {
    this.currentIndex = this.getRandomIndex()
  }

  public updateResponse(response: Event): void {
    this.response = ((<HTMLInputElement>response.target)).value
  } 

  public verifyResponse(): void {

  }
}
