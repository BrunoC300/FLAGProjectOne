import { Component, OnInit } from '@angular/core';
import { Foto } from '../models/foto';


@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  inputUrl: string = "";

  fotos: Foto[] = []


  constructor() { }

  ngOnInit(): void {

  }



}
