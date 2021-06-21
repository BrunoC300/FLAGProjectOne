import { Component } from '@angular/core';
import { ALBUNS } from './mock-albuns';
import { Album } from './models/album';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  albuns: Album[] = ALBUNS

  ngOnInit(): void {
    this.albuns = JSON.parse(localStorage.getItem("albuns") || "[]");
  }

  load() {
    return localStorage.setItem("albuns", JSON.stringify(this.albuns));
  }
}
