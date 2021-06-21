import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/services/fotos.service';
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
  removeAlbum(id: number) {
    const answer = window.confirm("Tem a certeza?");
    if (answer) {
      this.albuns = this.albuns.filter((v, i) => i !== id);
      localStorage.setItem('albuns', JSON.stringify(this.albuns));
    }
    ;
  }
  getAlbuns() {
    this.albuns = this.albunsService.getAlbuns()
  }


}
