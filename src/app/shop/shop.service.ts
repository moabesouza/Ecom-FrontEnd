import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaginacao } from '../shared/Models/paginacao';
import { ICategoria } from '../shared/Models/Categoria';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:44350/api";
  constructor(private http:HttpClient){}

  getProdutos(categoria_id?:number){
    let params = new HttpParams();
    if(categoria_id){
    params = params.append('categoria_id', categoria_id.toString())
    }
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
