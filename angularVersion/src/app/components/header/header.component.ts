import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle: any;
  navigation: any

  constructor() { }

  ngOnInit(): void {
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.toggle.addEventListener("click", () => {
      this.toggle.classList.toggle("active");
      this.navigation.classList.toggle("active");
    });
  }

  onClick() {
    this.toggle.classList.toggle("active");
    this.navigation.classList.toggle("active");
  }


}
