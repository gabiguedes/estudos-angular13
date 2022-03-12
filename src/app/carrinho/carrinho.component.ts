import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  items = this.carrinhoService.getItems();

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

}
