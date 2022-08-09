export interface Response {
  result: String;
  data: Item[];
}

export interface Item {
  id?: String;
  SKU: String;
  name: String;
  brandName: String;
  mainImage: String;
  price: {
    amount: String;
    currency: String;
  };
  sizes: String[];
  stockStatus: String;
  colour: String;
  description: String;
  quantity?: Number;
  total?: Number;
}
