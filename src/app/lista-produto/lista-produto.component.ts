import { Component, OnInit } from '@angular/core';

import { produtos } from '../produtos';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  produtos = produtos;

  constructor() { }

  ngOnInit(): void { 
  }

  compartilhar() {
    window.alert('O produto foi compartilhado');
  }

  onNotify() {
    window.alert('Você será notificado quando o produto estiver à venda');
  }


}
