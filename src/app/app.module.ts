import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProdutlosAlertasComponent } from './produtlos-alertas/produtlos-alertas.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    TopBarComponent,
    ProdutlosAlertasComponent,
    ProdutosDetalhesComponent,
    CarrinhoComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdutoComponent },
      { path: 'produtos/:produtoId', component: ProdutosDetalhesComponent },
      { path: 'carrinho', component: CarrinhoComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
