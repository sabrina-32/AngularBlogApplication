import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts:  BlogPost[] =[];

  constructor() { }

  ngOnInit() {

    this.blogPosts.push(new BlogPost('Blog Post 1', 'Summary 1'));
    this.blogPosts.push(new BlogPost('Blog Post 2', 'Summary 2'));
    this.blogPosts.push(new BlogPost('Blog Post 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem libero praesentium ipsa molestiae autem alias excepturi aperiam odit fuga et necessitatibus repellat minus est itaque architecto, possimus perferendis tempore?'));
  }

}
