import { Component, OnInit } from '@angular/core';
import { IProduto } from '../shared/Models/Produto';
import { ShopService } from './shop.service';
import { ICategoria } from '../shared/Models/Categoria';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  Produtos: IProduto [];
  Categoria: ICategoria [];
  CategoriaIdSelected: number = 0;
  sortOptions
  constructor(private shopService: ShopService) { }
  ngOnInit(): void {
    this.getProdutos();
    this.getCategorias();
  }
  getProdutos(){
     this.shopService.getProdutos(this.CategoriaIdSelected).subscribe( res =>{
      this.Produtos = res.data;
    }) 
  }
  getCategorias(){
    this.shopService.getCategorias().subscribe( res =>{
      this.Categoria = [{id:0, cat_nm_nome:'Todas', cat_ds_descricao: ''}, ...res];
    }) 
  }
 
  OnCategoriaSelect(categoria_id:number){
    this.CategoriaIdSelected = categoria_id;
    this.getProdutos();
  }

}