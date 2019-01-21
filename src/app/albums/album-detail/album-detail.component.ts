import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IAlbum } from 'src/app/shared/IAlbum.interface';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  originalTitle: string;
  selectedAlbum: IAlbum;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @Input() set album(albumData: IAlbum) {
    if (albumData) { this.originalTitle = albumData.title; }

    // this is to copy data and break reference - stop mutations in other, parent components
    this.selectedAlbum = Object.assign({}, albumData);
  }


  constructor() { }

  ngOnInit() {
  }

}
