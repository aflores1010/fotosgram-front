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

  constructor(private postsService: PostsService) {}

  ionViewWillEnter() {
    this.loadNext();

  }



  loadNext(event?) {
    this.postsService.getPosts().subscribe(res => {
      console.log(res.posts);
      this.posts.push(...res.posts);

      if(event) {
        event.target.complete();

        if(res.posts.length === 0)
        event.target.disabled = true
      }
    });
  }

}
