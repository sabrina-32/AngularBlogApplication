import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss']
})
export class BlogPostTitleComponent implements OnInit {

  @Input() post: BlogPost;

  constructor() { }

  ngOnInit() {

    
  }

}
