import { Component, OnInit } from '@angular/core';

export interface Product {
    name: string;
    category: string;
    price: string;
    size: string;
    stock: number;
    description: string;
}

const SAMPLE_DATA: Product[] = [
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
  { name: "T-Shirt", category: "Apparel", price: "Rs. 650", size: "XL", stock: 23, description: "Mens' Apparel"},
];

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'size', 'stock', 'description'];
  dataSource = SAMPLE_DATA;
  constructor() { }

  ngOnInit(): void {

  }

}
