import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALBUNS } from './mock-albuns'
import { SERVIÇOS } from './mock-services'
import { Album } from './models/album';
import { Serviço } from './models/serviço';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }

  getAlbuns(): Observable<Album[]> {
    const albuns = of(ALBUNS);
    return albuns;
  }

  getAlbumById(id: number): Observable<Album> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const albuns = ALBUNS.find(h => h.id === id)!;
    return of(albuns);
  }

  getServiços(): Observable<Serviço[]> {
    const servicos = of(SERVIÇOS);
    return servicos;
  }

}
