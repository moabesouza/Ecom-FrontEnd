import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaginacao } from '../shared/Models/paginacao';
import { ICategoria } from '../shared/Models/Categoria';
import { map } from 'rxjs';
import { ShopParams } from '../shared/Models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:44350/api";
  constructor(private http:HttpClient){}

  getProdutos(shopParams:ShopParams){
    let params = new HttpParams();
    if(shopParams.categoria_id != 0){
    params = params.append('categoria_id', shopParams.categoria_id.toString())
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search)
    }

    params = params.append('sort', shopParams.sort)
    params = params.append('pageNumber', shopParams.pageNumber.toString())
    params = params.append('pageSize', shopParams.pageSize.toString())
    return this.http.get<IPaginacao>(this.baseUrl + '/produto/todos', {observe:'response', params})
    .pipe(
    map(Response =>{
      return Response.body;
    })
    )
  }

  getCategorias(){
    return this.http.get<ICategoria[]>(this.baseUrl + '/categoria/todos');
  }




}
