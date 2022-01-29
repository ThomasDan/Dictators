import { Component, Input, OnInit } from '@angular/core';
import { Dictator } from '../dictator.model';
import { Color } from 'src/app/color.model';
import { HandleDictatorsService } from '../dictators-services/handle-dictators.service';

@Component({
  selector: 'app-dictator',
  templateUrl: './dictator.component.html',
  styleUrls: ['./dictator.component.css']
})
export class DictatorComponent implements OnInit {
  @Input() dictator: Dictator;
  @Input() i: number;
  audio = new Audio();

  constructor(private dickHandler: HandleDictatorsService) { }

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
    this.dickHandler.deleteDictator(this.i);
  }

  GetColorString(color: Color){
    return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
  }

}
