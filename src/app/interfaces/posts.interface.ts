export interface PostsResponse {
    ok: boolean;
    page: number;
    posts: PostInterface[];
  }
  
export interface PostInterface {
    img?: string[];
    _id?: string;
    message?: string;
    coords?: string;
    user?: User;
    created: string;
  }
  
export interface User {
    avatar?: string;
    _id?: string;
    name?: string;
    email?: string;
  }