import { Color } from './../color.model';
import { Component, OnInit } from '@angular/core';
import { Dictator } from './dictator.model';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})
export class DictatorsComponent implements OnInit {
  dictators: Dictator[] = [
    new Dictator('Dicktator', 'DIck potatoe lol', ['being a dick','being a potatoe'], [new Color(255, 200, 200, 1), new Color(200, 125, 125, 1), new Color(75, 0, 0, 1)], 'dicktatoe.png', 'NaziMidi.mp3'),
    new Dictator('Dicktamatoe', 'Tomatoe Dick lolmao', ['being a tomatoe','being a dick'], [new Color(200, 255, 200, 1), new Color(125, 200, 125, 1), new Color(50, 50, 50, 1)], 'tomator.png', 'tomato.mp3'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
