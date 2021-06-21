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

  id = 0
  deleteIcon = faTrashAlt;
  albuns: Album[] = []
  fotos: Foto[] = []

  constructor(private fotosService: FotosService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAlbum();
    this.getAlbuns();
    console.log(this.albuns[this.id - 1].fotos)
    console.log(this.albuns)
  }

  getAlbuns() {
    this.albuns = this.fotosService.getAlbuns();
  }
  getAlbum(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));//id porque no routing definimos "detail/:id"
    const album = this.fotosService.getAlbumById(id)
    this.fotos = album.fotos
  }
  removeFoto(id: number) {
    const answer = window.confirm("Tem a certeza?");
    if (answer) {
      this.fotos = this.fotos.filter((v, i) => i !== id);
      this.albuns[this.id - 1].fotos = this.fotos
      console.log(this.albuns[this.id - 1].fotos)
      console.log(this.albuns)
      localStorage.setItem('albuns', JSON.stringify(this.albuns));
      window.location.reload()
    }
  }



}
