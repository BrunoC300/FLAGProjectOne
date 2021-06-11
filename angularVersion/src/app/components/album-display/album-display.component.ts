import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.css']
})
export class AlbumDisplayComponent implements OnInit {

  deleteIcon = faTrashAlt;
  editIcon = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
