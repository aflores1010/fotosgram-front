import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { PostInterface } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public posts: PostInterface[] = [];
  public infiniteDisabled: boolean = false;

  constructor(private postsService: PostsService) {}

  ionViewWillEnter() {
    this.loadNext();

  }

  reload(event) {
    console.log('reloading');
    this.posts = [];
    this.infiniteDisabled = false;
    this.loadNext(event, true);
  }

  loadNext(event?, pull: boolean = false) {

    this.postsService.getPosts(pull).subscribe(res => {
      console.log(res.posts);
      

      this.posts.push(...res.posts);

      if(event) {
        event.target.complete();

        if(res.posts.length === 0)
        this.infiniteDisabled = true;
      }
    });
  }

}
