import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'size', 'stock', 'description', 'action'];
  productListing : Product[];

  constructor(private listingService: ListingService ) { }

  ngOnInit(): void {
      this.getProducts();
  }

    getProducts(){
        this.listingService.listProducts().subscribe((products) => this.productListing = products);
    }
}
