import { Component } from '@angular/core';
import {Album} from "../../models/Album";
import {AlbumService} from "../../services/AlbumService/album.service";

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})
export class ListAlbumsComponent {
  listAlbum! : Album[]
  constructor(private albumService : AlbumService) {
    this.albumService.getAll().subscribe({
      next : data => this.listAlbum = data,
      error : err => console.log(err)
    })
  }

  deleteAlbum(id: any) {
    this.albumService.removeAlbum(id).subscribe({
      next : data => this.listAlbum = this.listAlbum.filter((album) => album.id != id),
      error : err => console.log(err)
    })
  }
}
