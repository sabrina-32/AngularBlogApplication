import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts:  BlogPost[][];

  constructor() { 


  }

  ngOnInit() {

    this.blogPosts=
    [
      [
        {title: 'Post 1',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      {title: 'Post 2',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 3',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 4',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      ],
      [
        {title: 'Post 5',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      {title: 'Post 6',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 7',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 8',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      ],
      [
        {title: 'Post 9',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      {title: 'Post 10',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 11',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      {title: 'Post 12',
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis consequuntur illum neque aliquid necessitatibus recusandae assumenda! Delectus, quia nihil! Facilis, quibusdam quisquam ipsa inventore natus dolorem sit repellat voluptatibus." },
      
      ]

    ]


   
  }

}
