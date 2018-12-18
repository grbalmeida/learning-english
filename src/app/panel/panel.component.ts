import {Component, OnInit, EventEmitter, Output} from '@angular/core'
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
  public counter: number = 0
  public progress: number = 0
  public response: string = ''
  public attempts: number = 3
  @Output() public closeGame: EventEmitter<string> = new EventEmitter()

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
      this.response = ''

      if(this.progress < 100) {
        this.progress += (100 / this.ratios.length)
      }

      if(!this.setCurrentPhrase()) {
        this.closeGame.emit('victory')
      }
    } else {
      this.attempts--

      if(this.attempts === -1) {
        this.closeGame.emit('defeat')
      }
    }
  }
}
