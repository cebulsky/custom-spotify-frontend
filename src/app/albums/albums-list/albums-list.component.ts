import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAlbum } from 'src/app/shared/IAlbum.interface';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  @Input() albums: IAlbum[];
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
