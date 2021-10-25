import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/model/product';



// const PRODUCT_DETAILS_DATA : ProductDetails =
//   {
//     id:1,
//     product_name:"Amd Ryzen 7 37000x",
//     price: 15000,
//     mrp:25000,
//     sku : "SKU0001468",
//     images:[
//       {
//         id:1,
//         img_url: "./assets/product-list/product-1.png",
//         product_id:1
//       },
//       {
//         id:2,
//         img_url: "./assets/product-list/product-1.png",
//         product_id:1
//       },
//       {
//         id:3,
//         img_url: "./assets/product-list/product-1.png",
//         product_id:1
//       }
//     ]
//   }


@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.scss']
})


export class DeatilsComponent implements OnInit {

  constructor() { }
  // productDetails= PRODUCT_DETAILS_DATA

  ngOnInit(): void {
  }

}
