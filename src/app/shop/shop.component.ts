import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduto } from '../shared/Models/Produto';
import { ShopService } from './shop.service';
import { ICategoria } from '../shared/Models/Categoria';
import { ShopParams } from '../shared/Models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
@ViewChild('search') searchTerm:ElementRef;
  Produtos: IProduto [];
  Categoria: ICategoria [];
  shopParams = new ShopParams();
  totalCount: number;

  sortOption =[
    {nome: 'Nome', value:'nome'},
    {nome: 'Preço Max-Min', value:'valorDesc'},
    {nome: 'Preço Min-Max', value:'valorAsc'}
  ]
 
  constructor(private shopService: ShopService) { }
  ngOnInit(): void {
    this.getProdutos();
    this.getCategorias();
  }
  getProdutos(){
     this.shopService.getProdutos(this.shopParams).subscribe( res =>{
      this.Produtos = res.data;
      this.totalCount = res.count;
      this.shopParams.pageNumber = res.pageNumber;
      this.shopParams.pageSize = res.pageSize;
    }) 
  }
  getCategorias(){
    this.shopService.getCategorias().subscribe( res =>{
      this.Categoria = [{id:0, cat_nm_nome:'Todas', cat_ds_descricao: ''}, ...res];
    }) 
  }
 
  OnCategoriaSelect(categoria_id:number){
    this.shopParams.categoria_id = categoria_id;
    this.shopParams.pageNumber = 1;
    this.getProdutos();
  }

  onSortSelect(sort: Event){
    let sortValue = (sort.target as HTMLInputElement).value;
    this.shopParams.sort = sortValue;
    this.getProdutos();
  }

  onPageChaged(event:any){
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getProdutos();
    }
   
   }

   onSearch(){
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProdutos();
   }

   onClean(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProdutos();
   }
}
