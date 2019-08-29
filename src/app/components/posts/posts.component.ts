import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() posts: PostInterface[] = [];

  constructor() { }

  ngOnInit() {
    console.log('Post from component ', this.posts);
  }

}
