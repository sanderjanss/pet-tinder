import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, tap} from "rxjs";
import {Pet} from "../model/Pet";
import {mapEntry} from "@angular/compiler/src/output/map_util";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly url : string;
  private http: HttpClient;


  constructor(http : HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
    this.http = http;

  }

  get getPets() : Observable<any>{
    return this.http.get<Pet[]>(this.url).pipe(map(result => result.sort(function (a, b) {
      return ('' + a.name).localeCompare(b.name);
    }))).pipe()
  }

}
