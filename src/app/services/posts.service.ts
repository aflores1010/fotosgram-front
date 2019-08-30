import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostsResponse } from '../interfaces/posts.interface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private page = 0;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.page ++;
    return this.http.get<PostsResponse>( URL + '/posts?page=' + this.page);
  }
}
