import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumDisplayComponent } from './components/album-display/album-display.component';
import { AlbumPhotoComponent } from './components/album-photo/album-photo.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDisplayComponent,
    AlbumPhotoComponent,
    CreateAlbumComponent,
    AddPhotoComponent,
    HeaderComponent,
    ServicesComponent,
    MainPageComponent,
    ContactComponent,
    AlbumListComponent
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
