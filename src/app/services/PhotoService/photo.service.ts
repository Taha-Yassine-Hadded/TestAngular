import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../../models/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url : string = 'http://localhost:3000/photo'

  constructor(private http : HttpClient) { }

  getAll() : Observable<Photo[]> {
    return this.http.get<Photo[]>(this.url)
  }
}
