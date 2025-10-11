export interface Contact {
  id: number,
  firstname: string,
  lastname:string,
  photo:string,
  email:string,
  phone:number,
  country:string,
  job:string,
  company:string,
  address:string,
  website:string,
  actions:string,
  created_at:Date,
  updated_at:Date
}

/*
ColumnKeys<T>: Es un tipo de genérico que recibe un tipo T, y va devolver un arreglo de claves T

keyof: es un operador que devuelve los tipos de claves de un objeto T (genérico)

*/
export type ColumnKeys<T> = Array<keyof T>
