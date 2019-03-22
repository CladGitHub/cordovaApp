import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersGetJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersGetJsonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersGetJsonProvider Provider');
  }

  getJson(path: string){return this.http.get(path);}

}
