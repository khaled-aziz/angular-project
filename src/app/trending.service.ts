import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private http = inject(HttpClient);
  baseUrl:string='https://image.tmdb.org/t/p/original/';
  getTrindingItems(mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US`,{
      headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JiMWNlYjkwNTUyMDEwZjgyMDczNzFjMGJmNGE2YSIsIm5iZiI6MTczNzkwNDM3NS4zMzEsInN1YiI6IjY3OTY1MGY3MTkyMTE1OTAxZThmMjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfKhEjvtyL_2yHmGViG_yu-8jIfWFrcBlglnNJp7l0'
      }
    })
  }
  getTrindingDetails(id:number, mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`,{
      headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JiMWNlYjkwNTUyMDEwZjgyMDczNzFjMGJmNGE2YSIsIm5iZiI6MTczNzkwNDM3NS4zMzEsInN1YiI6IjY3OTY1MGY3MTkyMTE1OTAxZThmMjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfKhEjvtyL_2yHmGViG_yu-8jIfWFrcBlglnNJp7l0'
      }
    })
  }
  searchItem(page:number,searchWord:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?query=${searchWord}&include_adult=false&language=en-US&page=${page}`,{
      headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JiMWNlYjkwNTUyMDEwZjgyMDczNzFjMGJmNGE2YSIsIm5iZiI6MTczNzkwNDM3NS4zMzEsInN1YiI6IjY3OTY1MGY3MTkyMTE1OTAxZThmMjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTfKhEjvtyL_2yHmGViG_yu-8jIfWFrcBlglnNJp7l0'
      }
    })
  }
}
