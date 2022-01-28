import { Component, Input, OnInit } from '@angular/core';
import { DictatorsService } from '../dictators.service';
import { Dictator } from '../dictator.model';
import { Color } from 'src/app/color.model';

@Component({
  selector: 'app-dictator',
  templateUrl: './dictator.component.html',
  styleUrls: ['./dictator.component.css']
})
export class DictatorComponent implements OnInit {
  @Input() dictator: Dictator;
  @Input() i: number;
  audio = new Audio();

  constructor(private dickServ: DictatorsService) { }

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
    this.dickServ.delete(this.i).subscribe(() => {
      next: this.dickServ.dictators.splice(this.i, 1);
    });
  }

  GetColorString(color: Color){
    return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
  }

}
