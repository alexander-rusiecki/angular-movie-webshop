import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '@interfaces/movie';
import { IMovieCategory } from '@interfaces/movieCategory';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: string = '';
  moviesWithRightCategory: IMovie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.category = param['category'];
      this.movieService.category$.subscribe((webshopCategory: any) => {
        this.moviesWithRightCategory = webshopCategory;
      });

      this.movieService.getMoviesByCategory(this.category);
    });
  }
}
