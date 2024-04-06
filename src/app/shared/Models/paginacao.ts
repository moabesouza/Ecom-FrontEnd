import { IProduto } from "./Produto"

export interface IPaginacao {
    pageNumber: number
    pageSize: number
    count: number
    data: IProduto[]
  }