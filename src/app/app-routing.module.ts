import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ListAlbumsComponent} from "./components/list-albums/list-albums.component";
import {ArchivesComponent} from "./components/archives/archives.component";
import {AddAlbumComponent} from "./components/add-album/add-album.component";
import {ListPhotosComponent} from "./components/list-photos/list-photos.component";

const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "albums", component : ListAlbumsComponent },
  { path : "archives", component : ArchivesComponent },
  { path : "addAlbum", component : AddAlbumComponent },
  { path : "albums/photos/:id", component : ListPhotosComponent },
  { path : "", redirectTo : "/home", pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
