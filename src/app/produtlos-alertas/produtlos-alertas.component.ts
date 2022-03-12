import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produtlos-alertas',
  templateUrl: './produtlos-alertas.component.html',
  styleUrls: ['./produtlos-alertas.component.css']
})
export class ProdutlosAlertasComponent implements OnInit {

  @Input() produto!: Produto;
  constructor() { }

  ngOnInit(): void {
  }

}
