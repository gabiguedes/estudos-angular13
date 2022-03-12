import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  custosDeRemessa = this.carrinhoService.getShippingPrices();

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  }

}
