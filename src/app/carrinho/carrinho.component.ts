import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  items = this.carrinhoService.getItems();
  
  checkoutForm = this.formBuilder.group({
    nome: '',
    endereco: ''
  });
  
  constructor(
    private carrinhoService: CarrinhoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.items = this.carrinhoService.limparCarrinho();
    console.warn('Seu pedido foi enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
