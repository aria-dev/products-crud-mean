import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import {AddListingComponent} from './add-listing/add-listing.component';
import {ViewListingComponent} from './view-listing/view-listing.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: ListingComponent
  },
  {
    path: "new",
    component: AddListingComponent
  },
  {
      path: "view",
      component: ViewListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
