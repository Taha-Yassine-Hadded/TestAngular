import { Component } from '@angular/core';
import {Photo} from "../../models/Photo";
import {PhotoService} from "../../services/PhotoService/photo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrl: './list-photos.component.css'
})
export class ListPhotosComponent {
  listPhoto! : Photo[]
  id! : any;

  constructor(private photoService : PhotoService, private ar : ActivatedRoute) {
    this.id = this.ar.snapshot.paramMap.get('id')
    this.photoService.getAll().subscribe({
      next : data => this.listPhoto = data.filter((photo) => photo.idAlbum == this.id),
      error : err => console.log(err)
    })
  }

}
