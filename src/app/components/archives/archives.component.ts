import { Component } from '@angular/core';
import {Album} from "../../models/Album";
import {AlbumService} from "../../services/AlbumService/album.service";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.css'
})
export class ArchivesComponent {
  archivedAlbums! : Album[]

  constructor(private albumService : AlbumService) {
    this.albumService.getAll().subscribe({
      next : data => this.archivedAlbums = data.filter((album) => album.archived == 1)
    })
  }

}
