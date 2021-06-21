import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Foto } from '../../models/foto';
import { FotosService } from '../../services/fotos.service'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';



@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  id = 0
  albuns: Album[] = []
  addIcon = faPlus;
  inputUrl: string = "";

  constructor(private fotosService: FotosService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlbuns();
  }
  getAlbuns() {
    this.albuns = this.fotosService.getAlbuns()
  }

  addFoto() {
    if (this.inputUrl) {
      const answer = window.confirm("Confirmar?");
      if (answer) {
        const extra: string = "assets/img"
        this.inputUrl = `${extra}${this.inputUrl.slice(11)}`
        let foto = {
          url: this.inputUrl
        }
        this.albuns[this.id - 1].fotos.push(foto)
        localStorage.setItem('albuns', JSON.stringify(this.albuns));
        window.location.reload()
        this.inputUrl = "";
      }
    }
  }


  goBack(): void {
    this.location.back(); // Volta da pagina onde veio
  }

}
