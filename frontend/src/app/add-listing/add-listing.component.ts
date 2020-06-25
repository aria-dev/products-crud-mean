import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../models/product';
import { ListingService } from '../services/listing.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  addListingForm;

  constructor(
      private formBuilder: FormBuilder, 
      private listingService : ListingService, 
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {

      this.addListingForm = this.formBuilder.group({
            name: '',
            category: '',
            price: '',
            size: '',
            stock: '',
            description: ''
        });
  }

  onSubmit(form) {
    // Process checkout data here
    this.addListingForm.reset();

    const product = <Product>({
      name: form.name, 
      category: form.category,
      price: form.price,
      size: form.size,
      stock: form.stock,
      description: form.description,
    });

    this.listingService.addProduct(product).subscribe((res)=> {
      console.log("Posted to Server", res);
        //Navigate to the product after added! 
    //   this.router.navigate(['/home', { id: itemId }]);
      this.router.navigate(['/home']);
    });

  }
}
