import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../../models/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url : string = 'http://localhost:3000/album'
  constructor(private http : HttpClient) { }

  getAll() : Observable<Album[]> {
    return this.http.get<Album[]>(this.url)
  }

  addAlbum(album : Album) {
    return this.http.post<Album>(this.url, album);
  }

  removeAlbum<Album>(id: any): Observable<Album>{
    return this.http.delete<Album>(this.url+`/${id}`);
  }
}
