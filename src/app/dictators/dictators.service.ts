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

  create(dictator: any) {
    console.log(<Dictator>dictator);
    return this.http.post<any>(this.connectionString + 'create', dictator);
  }

  getDictatorsArray(){
    return this.dictators.slice();
  }
}
