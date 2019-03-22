import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchType, RsisearchService } from '../../providers/rsisearch/rsisearch';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: Observable<any>;
  
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  information = null;

  constructor(public navCtrl: NavController, private rsisearchService: RsisearchService) {

  }
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.rsisearchService.searchData(this.searchTerm, this.type);

    this.results.subscribe(res => {
      console.log('My results usando subscribe ', res);
      //this.information = res.shortURL;
    })
  }

  openWebsite( url : string) {
    console.log("parte openWebsite");
    window.open(url, '_blank');
  }
}
