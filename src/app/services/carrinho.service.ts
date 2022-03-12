import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: Produto[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addNoCarrinho(produto: Produto) {
    this.items.push(produto);
  }
  
  getItems() {
    return this.items;
  }
  
  limparCarrinho() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }

}
