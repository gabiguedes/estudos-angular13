import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProdutlosAlertasComponent } from './produtlos-alertas/produtlos-alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    TopBarComponent,
    ProdutlosAlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdutoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
