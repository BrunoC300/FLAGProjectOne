import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Foto } from '../models/foto';
import { FOTOS } from '../mock-fotos'
import { FotosService } from '../fotos.service'



@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  fotos: Foto[] = []
  addIcon = faPlus;
  inputUrl: string = "";
  constructor(private fotosService: FotosService) { }

  ngOnInit(): void {
    this.fotos = this.fotosService.getFotos();
  }

  removeFoto(id: number) {
    this.fotos = this.fotos.filter((v, i) => i !== id);
  }


  addFoto() {
    const extra: string = "assets/img"
    this.inputUrl = `${extra}${this.inputUrl.slice(11)}`
    if (this.inputUrl) {
      this.fotos.push({
        url: this.inputUrl,
      });
      this.inputUrl = "";
    }
  }

}
