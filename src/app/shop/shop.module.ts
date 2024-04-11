import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsProdutoComponent } from './details-produto/details-produto.component';

import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [
    ShopComponent,
    ShopItemComponent,
    DetailsProdutoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],

  exports:[

   
  ]
})
export class ShopModule { }
