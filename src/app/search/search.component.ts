import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  activatedRoute= inject(ActivatedRoute);
  trendingService= inject(TrendingService);
  constructor(){
    // this.keyWord = this.activatedRoute.snapshot.params['keyWord'];
  }
  baseUrl:string=''
  keyWord:string='';
  currentpage:number = 1;
  totalpage:number=1
  searchResult:any=[];
  getseachedItem(){
    this.baseUrl= this.trendingService.baseUrl;
    this.trendingService.searchItem(this.currentpage,this.keyWord).subscribe((res)=>{
      this.totalpage= res.total_pages;
      this.searchResult= res.results;
    })
  }
  incrementCurrentpage(){
    if (this.currentpage < this.totalpage) {
      this.currentpage++
      this.getseachedItem()
    }
  }
  decrementCurrentpage(){
    if (this.currentpage !==1) {
      this.currentpage--
      this.getseachedItem()
    }
  }
  setCurrentpage(index:number){
    this.currentpage=index;
    this.getseachedItem()
  }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.keyWord = params.get('keyWord') || ''; 
      this.getseachedItem();
    });
  }
  
}
