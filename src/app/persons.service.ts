import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {
  Http,
  Response
} from "@angular/http";

@Injectable()
export class PersonsService {

  constructor(
    private http: Http
  ) { }

  public getPersons(): Observable<any> {
    return this.http.get('/data.json').map(
      (data: Response) => {
        return data.json();
      }
    )
  }

}
