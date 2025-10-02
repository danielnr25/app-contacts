export default interface Contact {
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
  website:string
  created_at:Date,
  updated_at:Date
}