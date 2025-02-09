import { Component, inject } from '@angular/core';
import { TrendingService } from '../trending.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movies',
  imports: [RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  constructor(){
    this.baseUrl= this.trendingService.baseUrl;

  }
  trendingService= inject(TrendingService);
  moviesList:any[]= [];
  baseUrl:string='';
  
  getTrendingMovies(){
    this.trendingService.getTrindingItems('movie').subscribe((res)=>{
      this.moviesList=res.results
    })
  }
  ngOnInit(){
    this.getTrendingMovies();
  }
}
