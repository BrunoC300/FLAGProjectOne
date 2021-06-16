import { Injectable } from '@angular/core';
import { FOTOS } from './mock-fotos'
import { ALBUNS } from './mock-albuns'

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }

  getFotos() {
    return FOTOS;
  }

  getAlbuns() {
    return ALBUNS;
  }


}
