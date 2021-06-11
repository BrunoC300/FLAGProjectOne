import { Component, OnInit } from '@angular/core';
import { Foto } from '../../models/foto';
import { FotosService } from '../../fotos.service'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {

  deleteIcon = faTrashAlt;
  editIcon = faEdit;
  fotos: Foto[] = []

  constructor(private fotosService: FotosService) { }

  ngOnInit(): void {
    this.fotos = this.fotosService.getFotos();
  }
  removeFoto(id: number) {
    const answer = window.confirm("Tem a certeza?");
    if (answer) { this.fotos = this.fotos.filter((v, i) => i !== id); }

  }


}
