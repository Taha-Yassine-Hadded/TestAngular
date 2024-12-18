import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Album} from "../../models/Album";
import {AlbumService} from "../../services/AlbumService/album.service";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrl: './add-album.component.css'
})
export class AddAlbumComponent {
  album! : FormGroup;
  constructor(private fb : FormBuilder, private albumService : AlbumService) {
    this.album = this.fb.group({
      title : ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
      coverPicture : ["", [Validators.minLength(5)]]
    })
  }

  addNewAlbum() {
    const newAlbum: Album = {
      id : 0,
      title: this.album.value.title,
      coverPicture : this.album.value.coverPicture,
      archived: 0,
      creationDate: new Date()
    };
    this.albumService.addAlbum(newAlbum).subscribe({
      next : (data) => console.log("added"),
      error : (err) => console.error(err)
    })
  }
}
