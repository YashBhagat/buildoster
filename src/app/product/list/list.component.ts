import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';




const PRODUCT_DATA: Product[] = [
  {
    id: 1,
     product_name:"AMD Ryzen 7 3700X",
      price:15000,
       mrp: 25000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-1.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-1.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-1.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-1.png",
            product_id:1
          }
        ]
  },
  {
    id: 2,
     product_name:"AMD Ryzen 5 3600X",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-2.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          }
        ]
  },
  {
    id: 3,
     product_name:"AMD Ryzen 7 3700",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-3.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-3.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-3.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-3.png",
            product_id:1
          }
        ]
  },
  {
    id: 4,
     product_name:"Intel Core i5-10400F",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-4.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-4.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-4.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-4.png",
            product_id:1
          }
        ]
  },
  {
    id: 5,
     product_name:"Intel Core i5-9400",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-5.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-5.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-5.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-5.png",
            product_id:1
          }
        ]
  },
  {
    id: 5,
     product_name:"Intel Core i3-9400",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-6.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-6.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-6.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-6.png",
            product_id:1
          }
        ]
  },
  {
    id: 6,
     product_name:"Ryzen 5 3600x",
      price:35000,
       mrp: 45000,
        sku: "SKU00001",
        thumbnail:{
          id: 1,
          img_url:"./assets/product-list/product-2.png",
          product_id:1
        },
        images: [
          {
            id: 1,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          },
          {
            id:2,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          },
          {
            id:3,
            img_url:"./assets/product-list/product-2.png",
            product_id:1
          }
        ]
  },

]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor() { }

  productList= PRODUCT_DATA;
  ngOnInit(): void {
  }

}
