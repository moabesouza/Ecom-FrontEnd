import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { DetailsProdutoComponent } from './details-produto/details-produto.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'', component:ShopComponent},
  {path:':id', component:DetailsProdutoComponent },

  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ShopRoutingModule { }
