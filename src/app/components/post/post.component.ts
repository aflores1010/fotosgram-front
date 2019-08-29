import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: PostInterface[] = [];


  constructor() { }

  ngOnInit() {}

}
