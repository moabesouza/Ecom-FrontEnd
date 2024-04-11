import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/shared/Models/Produto';

@Component({
  selector: 'app-details-produto',
  templateUrl: './details-produto.component.html',
  styleUrls: ['./details-produto.component.scss']
})
export class DetailsProdutoComponent implements OnInit {
   produto: IProduto;
  constructor(private shopService: ShopService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduto();
  }

  loadProduto(){
    this.shopService.getProduto(parseInt(this.activeRoute.snapshot.paramMap.get('id')))
    .subscribe( res => {
      this.produto = res
    });
  }

}
