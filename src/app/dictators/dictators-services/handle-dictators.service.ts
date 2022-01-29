import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Dictator } from '../dictator.model';
import { DictatorsService } from './dictators.service';

@Injectable({
  providedIn: 'root'
})
export class HandleDictatorsService {

  // A service existing exclusively to automatically update the dictators.component dictators list whenever there's a change in the Dictators.Service

  constructor(private dickServ: DictatorsService) { }

  dictators$ : BehaviorSubject<Dictator[]> = new BehaviorSubject<Dictator[]>([]);
  dictatorsReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loadDictators()
  {
    let dics;
    this.dickServ.getAllDictators().subscribe((data: Dictator[]) => {
      next:
        dics = data;
        console.log('Loading Dictators!');
      complete:
        this.dictators$.next(dics);
        this.dictatorsReady$.next(true);
     });
  }

  createDictator(dic: Dictator){
    this.dickServ.create(dic).subscribe((dicData: Dictator) => {
      complete:
        this.dictatorsReady$.next(true);
    });
  }

  deleteDictator(i: number){
    this.dickServ.delete(i).subscribe(() => {
      complete:
        this.dictatorsReady$.next(true);
    });
  }

}
