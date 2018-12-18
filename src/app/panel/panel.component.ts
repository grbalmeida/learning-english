import {Component, OnInit} from '@angular/core'
import {Phrase} from '../shared/phrase.model'
import PHRASES from './phrases-mock'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  public counter: number = 0

  constructor() { 
    this.ratios = []
    this.generateRandomIndexes()
    this.setCurrentPhrase()
  }

  ngOnInit() {
  }

  public generateRandomIndexes(): void {
    while(this.ratios.length !== this.phrases.length) {
      const random = Math.floor(Math.random() * this.phrases.length)

      if(!this.ratios.includes(random)) {
        this.ratios.push(random)
      }
    }
  }

  public setCurrentPhrase(): boolean {
    const currentPhrase = this.phrases[this.ratios[this.counter]]
    if(currentPhrase !== undefined) {
      this.currentPhrase = this.phrases[this.ratios[this.counter]]
      return true
    }
    return false
  }

  public updateResponse(response: Event): void {
    this.response = ((<HTMLInputElement>response.target)).value
  } 

  public verifyResponse(): void {
    if(this.response === this.currentPhrase.portuguesePhrase) {
      this.counter++
      if(!this.setCurrentPhrase()) {
        console.log('Jogo ganho!!!')
      }
    }
  }
}
