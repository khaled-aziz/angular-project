import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-detailes',
  imports: [],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.scss'
})
export class DetailesComponent {
  constructor(){
    this.baseUrl= this.trendingService.baseUrl;
    this.currentId = this.activatedRoute.snapshot.params['id'];
    this.currentMediaType = this.activatedRoute.snapshot.params['midiaType'];
  }

  baseUrl:string='';
  trendingService= inject(TrendingService);
  activatedRoute= inject(ActivatedRoute);
  currentId:number= 0;
  currentMediaType:string='';
  itemDetails:any={};

  getItemDetails(){
    this.trendingService.getTrindingDetails(this.currentId, this.currentMediaType).subscribe((res)=>{
      this.itemDetails=res;
    })
  }
  ngOnInit(){
    this.getItemDetails();
  }
}
