import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tvshows',
  imports: [RouterLink],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.scss'
})
export class TvshowsComponent {
  constructor(){
      this.baseUrl= this.trendingService.baseUrl;
    }
    
    tvsList:any[]= [];
    trendingService= inject(TrendingService);
    moviesList:any[]= [];
    baseUrl:string='';
    getTrendingtv(){
      this.trendingService.getTrindingItems('tv').subscribe((res)=>{
        this.tvsList=res.results
      })
    }
    ngOnInit(){
      this.getTrendingtv();
    }
}
