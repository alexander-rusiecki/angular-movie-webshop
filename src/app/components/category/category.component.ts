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
  categoryId: number = 0;
  moviesWithRightCategoryId: any[] = [];
  filteredMovies: IMovie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.category = param['category'];
      this.movieService.category$.subscribe((webshopCategory: any) => {
        this.categoryId = webshopCategory.id;
      });
      this.movieService.getMoviesByCategory(this.category);
      this.movieService.movies$.subscribe((webshopMovies: any) => {
        this.moviesWithRightCategoryId = webshopMovies;
        for (const movie of this.moviesWithRightCategoryId) {
          for (const prodCat of movie.productCategory) {
            if (prodCat.categoryId === this.categoryId) {
              this.filteredMovies.push(movie);
            }
          }
        }
      });
      this.movieService.getAllMovies();
    });
  }
}
