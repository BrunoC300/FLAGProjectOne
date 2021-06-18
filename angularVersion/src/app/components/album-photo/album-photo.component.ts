import { Component, OnInit } from '@angular/core';
import { Foto } from '../../models/foto';
import { FotosService } from '../../services/fotos.service'
import { ActivatedRoute } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {

  deleteIcon = faTrashAlt;
  albuns: Album[] = []
  fotos: Foto[] = []

  constructor(private fotosService: FotosService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));//id porque no routing definimos "detail/:id"
    this.fotosService.getAlbumById(id)
      .subscribe(album => this.fotos = album.fotos);
  }
  removeFoto(id: number) {
    const answer = window.confirm("Tem a certeza?");
    if (answer) { this.fotos = this.fotos.filter((v, i) => i !== id); }
  }



}
