import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDisplayComponent } from './components/album-display/album-display.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ServicesComponent } from './components/servicos/services.component';

const routes: Routes = [
  { path: 'albuns/:id', component: AlbumDisplayComponent },
  { path: 'albuns', component: AlbumListComponent },
  { path: '', component: MainPageComponent },
  { path: 'serviços', component: ServicesComponent },
  { path: 'contacto', component: ContactComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
