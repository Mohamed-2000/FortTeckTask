export class Product {

  constructor(
    public id: number = 0,
    public name?: string,
    public color?: string,
    public size ?: string,
    public price?: number,
    public salePrice?:number,
    public pictureUrl?: string,
    public quantity ?: number,
    ) {


  }

}
