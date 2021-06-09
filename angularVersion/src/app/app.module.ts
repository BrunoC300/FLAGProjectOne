import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumDisplayComponent } from './album-display/album-display.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDisplayComponent,
    AlbumPhotoComponent,
    CreateAlbumComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
