import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Foto } from '../../models/foto';
import { FotosService } from '../../services/fotos.service'
import { Location } from '@angular/common';



@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  fotos: Foto[] = []
  addIcon = faPlus;
  inputUrl: string = "";
  constructor(private fotosService: FotosService, private location: Location) { }

  ngOnInit(): void {
  }

  addFoto() {
    if (this.inputUrl) {
      const answer = window.confirm("Confirmar?");
      if (answer) {
        const extra: string = "assets/img"
        this.inputUrl = `${extra}${this.inputUrl.slice(11)}`
        this.fotos.push({
          url: this.inputUrl,
        });
        this.inputUrl = "";
      }
    }
  }

  goBack(): void {
    this.location.back(); // Volta da pagina onde veio
  }

}
