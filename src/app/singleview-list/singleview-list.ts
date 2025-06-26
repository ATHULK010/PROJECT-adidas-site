import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../api-services';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css'
})
export class SingleviewList {
  singleproduct:any;
  constructor(private route:ActivatedRoute,private apiservice:ApiServices){}
ngOnInit()
{
  const productid=this.route.snapshot.paramMap.get('titleid');

  if(productid)
  {
    this.apiservice.getsingleProducts(productid).subscribe((data)=>{
      this.singleproduct=data;
      console.log(data);
    });
  }
}
}
