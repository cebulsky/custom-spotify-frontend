import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAlbum } from './IAlbum.interface';

const BASE_URL = 'http://localhost:8080/api/album/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(BASE_URL);
  }

  getOne(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  create(album: IAlbum) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(album), HEADER);
  }

  update(album: IAlbum) {
    return this.http.patch(`${BASE_URL}${album.id}`, JSON.stringify(album), HEADER);
  }

  delete(album: IAlbum) {
    return this.http.delete(`${BASE_URL}${album.id}`);
  }

}
