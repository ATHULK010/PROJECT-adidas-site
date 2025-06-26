import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiServices } from '../api-services';

@Component({
  selector: 'app-products',
  imports: [RouterLink,RouterModule],
  templateUrl:'./products.html',
  styleUrl: './products.css'
})
export class Products {
  products:any[]=[];constructor(private apiservice:ApiServices){}
  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any)=> {this.products= data;console.log(data);});
  }


}
