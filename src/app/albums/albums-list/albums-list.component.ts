import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/shared/IAlbum.interface';
import { AlbumService } from 'src/app/shared/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albums: IAlbum[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAll().subscribe(albums => {
      console.log(albums);
      this.albums = albums as IAlbum[];
    })

  }

}
