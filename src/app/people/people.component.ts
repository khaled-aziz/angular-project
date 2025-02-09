import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [RouterLink],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  constructor(){
        this.baseUrl= this.trendingService.baseUrl;
      }
      peopleList:any[]= [];
      trendingService= inject(TrendingService);
      moviesList:any[]= [];
      baseUrl:string='';
      getTrendingpoeple(){
        this.trendingService.getTrindingItems('person').subscribe((res)=>{
          this.peopleList=res.results
        })
      }
      ngOnInit(){
        this.getTrendingpoeple();
      }
}
