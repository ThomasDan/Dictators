import { Component, OnInit } from '@angular/core';
import { Color } from '../color.model';
import { DictatorsService } from './dictators.service';
import { Dictator } from './dictator.model';

@Component({
  selector: 'app-dictators',
  templateUrl: './dictators.component.html',
  styleUrls: ['./dictators.component.css']
})
export class DictatorsComponent implements OnInit {
  dictators: Dictator[] = [];
  placeholtators: Dictator[] = [
    new Dictator('Dicktator', 'DIck potatoe lol', ['being a dick','being a potatoe'], [new Color(255, 200, 200, 1), new Color(200, 125, 125, 1), new Color(75, 0, 0, 1)], 'dicktatoe.png', 'NaziMidi.mp3'),
    new Dictator('Dicktamatoe', 'Tomatoe Dick lolmao', ['being a tomatoe','being a dick'], [new Color(200, 255, 200, 1), new Color(125, 200, 125, 1), new Color(50, 50, 50, 1)], 'tomator.png', 'tomato.mp3'),
    new Dictator('The Onionizer', 'Iron-fisted leader of the Soyviet Onion', ['Onionizing', 'Making people cry', 'being a fail idiotlogy haha take that jacob and andreas lol commies wrecked again'], [new Color(255, 0, 0, 1), new Color(125, 0, 0, 1), new Color(255, 200, 200, 1)], 'onionizer.png', 'soyvietOnionMarch.mp3')
  ];


  constructor(private dickServ: DictatorsService) { }

  ngOnInit(): void {
    if(this.dictators.length < 1){
      for(let i = 0; i < this.placeholtators.length; i++){
        console.log('Pushing ' + this.placeholtators[i].name + ' to DictatorsService!');
        this.dickServ.create(this.placeholtators[i]);
      }
    }
    else{
      console.log(this.dictators.values());
    }
    this.dictators = this.dickServ.getDictatorsArray();

    this.dickServ.getAllDictators().subscribe((data: Dictator[]) => {
      next: this.dictators = data;
    });


  }

}
