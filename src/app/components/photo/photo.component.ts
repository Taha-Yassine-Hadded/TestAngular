import {Component, Input} from '@angular/core';
import {Photo} from "../../models/Photo";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Input() photo! : Photo
}
