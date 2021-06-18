import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/fotos.service';
import { Serviço } from 'src/app/models/serviço';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicos: Serviço[] = []

  constructor(private serviçosService: FotosService) { }

  ngOnInit(): void {
    this.getServiços();
  }
  getServiços() {
    this.serviçosService.getServiços()
      .subscribe(servico => this.servicos = servico);
  }
}
