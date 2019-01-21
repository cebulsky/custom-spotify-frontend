import { Component, OnInit } from '@angular/core';
import { IAlbum } from '../shared/IAlbum.interface';
import { AlbumService } from '../shared/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];
  currentAlbum: IAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAll().subscribe(albums => {
      this.albums = albums;
    })
  }

  selectAlbum(album) {
    this.currentAlbum = album;
  }

  saveAlbum(album: IAlbum) {
    if (!album._id) {
      this.createAlbum(album);
    } else {
      this.updateAlbum(album);
    }
  }

  updateAlbum(album: IAlbum): any {
    this.albumService.update(album)
      .subscribe(response => {
        this.getAlbums();
        this.resetCurrentAlbum();
      });
  }

  createAlbum(album: IAlbum): any {
    this.albumService.create(album)
      .subscribe(response => {
        this.getAlbums();
        this.resetCurrentAlbum();
      });
  }

  deleteAlbum(album) {
    this.albumService.delete(album)
      .subscribe(response => {
        this.getAlbums();
        this.resetCurrentAlbum();
      });
  }

  resetCurrentAlbum(): any {
    this.currentAlbum = { _id: null, title: '', artist: '', imageUrl: '', description: '' };
  }

  cancel(album) {
    this.resetCurrentAlbum();
  }

}
