import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss']
})
export class BlogPostTitleComponent implements OnInit {

  @Input() title: string;
  @Input() summary:  string;

  constructor() { }

  ngOnInit() {

    
  }

}
