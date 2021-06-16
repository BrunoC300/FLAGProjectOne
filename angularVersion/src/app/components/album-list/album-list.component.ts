import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/fotos.service';
import { Album } from 'src/app/models/album';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  deleteIcon = faTrashAlt;
  albuns: Album[] = []

  inputImag: string = "";
  inputNome: string = "";

  constructor(private albunsService: FotosService) { }

  ngOnInit(): void {
    this.getAlbuns();
  }

  getAlbuns(): void {
    this.albunsService.getAlbuns()
      .subscribe(album => this.albuns = album);
  }

  removeAlbum(id: number) {
    const answer = window.confirm("Tem a certeza?");
    if (answer) { this.albuns = this.albuns.filter((v, i) => i !== id); }
  }

  addAlbum() {
    if (this.inputImag) {
      const answer = window.confirm("Confirmar?");
      if (answer) {
        const extra: string = "assets/img"
        this.inputImag = `${extra}${this.inputImag.slice(11)}`
        this.albuns.push({
          id: this.albuns.length - 1,
          nome: this.inputNome,
          fotos: [{ url: this.inputImag }]
        });
        this.inputImag = "";
        this.inputNome = "";
      }
    }

  }

}
