import { Component, Input, OnInit } from '@angular/core';
import { Dictator } from '../dictator.model';

@Component({
  selector: 'app-dictator',
  templateUrl: './dictator.component.html',
  styleUrls: ['./dictator.component.css']
})
export class DictatorComponent implements OnInit {
  @Input() dictator: Dictator;
  audio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.audio.src = '../../../assets/sounds/' + this.dictator.anthemeFile;
  }

  Play(){
    this.audio.play();
  }

  Stop(){
    this.audio.pause();
  }

  Delete(){
    this.Stop();
    // ... somehow delete this dictator from the list of dictators.
    alert("If only it were that easy!");
  }

}
