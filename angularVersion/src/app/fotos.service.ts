import { Injectable } from '@angular/core';
import { FOTOS } from './mock-fotos'

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() { }

  getFotos() {
    return FOTOS;
  }


}
