import { Component, Input, OnInit } from '@angular/core';
import { IProduto } from 'src/app/shared/Models/Produto';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
@Input() produto:IProduto;
  constructor() { }

  ngOnInit(): void {
  }

}
