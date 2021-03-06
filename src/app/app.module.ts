import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumService } from './shared/album.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumsListComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [HttpClient, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
