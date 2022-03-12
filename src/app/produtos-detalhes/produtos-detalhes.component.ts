import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto, produtos } from '../produtos';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css']
})
export class ProdutosDetalhesComponent implements OnInit {
  produto: Produto | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoIdDaRota = Number(routeParams.get('produtoId'));

    this.produto = produtos.find(produto => produto.id === produtoIdDaRota);
  }

}
