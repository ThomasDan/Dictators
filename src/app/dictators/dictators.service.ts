import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dictator } from './dictator.model';

@Injectable({
  providedIn: 'root'
})
export class DictatorsService {
  connectionString = 'http://localhost:3000/';
  dictators: Dictator[] = [];
  constructor(private http: HttpClient) { }

  getAllDictators(): Observable<Dictator[]>{
    return this.http.get<Dictator[]>(this.connectionString + 'getDictators');
  }

  create(dictator: Dictator) {
    return this.http.post<Dictator>(this.connectionString + 'create', dictator);
  }

  delete(i: number){
    return this.http.delete<any>(this.connectionString + 'delete/' + i);
  }

  getDictatorsArray(): Dictator[]{
    console.log(this.dictators);
    return this.dictators.slice();
  }
}
