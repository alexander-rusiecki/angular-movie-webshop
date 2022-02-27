import { IMovieCategory } from '@interfaces/movieCategory';

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  productCategory: IMovieCategory[];
}
