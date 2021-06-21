import { Component, OnInit } from '@angular/core';
import { Foto } from '../../models/foto';
import { FotosService } from 'src/app/services/fotos.service';
import { Album } from 'src/app/models/album';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  inputUrl: string = "";

  fotos: Foto[] = []

  deleteIcon = faTrashAlt;
  addIcon = faFolderPlus;
  albuns: Album[] = []

  inputImag: string = "";
  inputNome: string = "";


  constructor(private albunsService: FotosService) { }

  ngOnInit(): void {
    this.getAlbuns();
  }
  /*
  getAlbuns(): void {
    this.albunsService.getAlbuns()
      .subscribe(album => this.albuns = album);
  }*/

  getAlbuns() {
    this.albuns = this.albunsService.getAlbuns();
  }

  addAlbum() {
    if (this.inputImag) {
      const answer = window.confirm("Confirmar?");
      if (answer) {
        const extra: string = "assets/img"
        this.inputImag = `${extra}${this.inputImag.slice(11)}`

        let album = {
          id: this.albuns.length + 1,
          nome: this.inputNome,
          fotos: [{ url: this.inputImag }]
        }
        this.albuns.push(album);
        localStorage.setItem("albuns", JSON.stringify(this.albuns));
        window.location.reload();
        this.inputImag = "";
        this.inputNome = "";
      }
    }
  }


}
