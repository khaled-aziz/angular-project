import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { DetailesComponent } from './detailes/detailes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { authGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {path:'',component:AboutComponent   },
    {path:'home', canActivate:[authGuard] , component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'movies', canActivate:[authGuard] ,component:MoviesComponent},
    {path:'people', canActivate:[authGuard] ,component:PeopleComponent},
    {path:'tv', canActivate:[authGuard] ,component:TvshowsComponent},
    {path:'details/:id/:midiaType', canActivate:[authGuard] ,component:DetailesComponent},
    {path:'search/:keyWord', canActivate:[authGuard] ,component:SearchComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'**',component:NotfoundComponent}
];
