import { Component } from '@angular/core';
import { MoviesComponent } from "../movies/movies.component";
import { TvshowsComponent } from "../tvshows/tvshows.component";
import { PeopleComponent } from "../people/people.component";

@Component({
  selector: 'app-home',
  imports: [MoviesComponent, TvshowsComponent, PeopleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
