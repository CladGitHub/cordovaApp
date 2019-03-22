import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidersAudioSearchProvider } from '../../providers/providers-audio-search/providers-audio-search';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  results: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private audioSearch: ProvidersAudioSearchProvider) {
  }

  searchInRG(word: string){
		this.audioSearch.searchWord(word);
		this.results = this.audioSearch.audioSearchResults;
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RgsearchPage');
  }

}
