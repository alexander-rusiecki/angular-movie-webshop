import { IMovie } from '@interfaces/MovieInterface';

const mockMovie1: IMovie = {
  id: 1,
  name: 'Test movie 1',
  description: 'Testing movie service, movie 1',
  price: 1337,
  imageUrl: 'https://www.testmovie1.com',
  year: 1978,
  added: '2021',
  productCategory: [{ id: 6, name: 'Action' }],
};

const mockMovie2: IMovie = {
  id: 2,
  name: 'Test movie 2',
  description: 'Testing movie service, movie 2',
  price: 13,
  imageUrl: 'https://www.testmovie2.com',
  year: 1976,
  added: '1937',
  productCategory: [{ id: 7, name: 'Sci-fi' }],
};

const mockMovie3: IMovie = {
  id: 3,
  name: 'Test movie 3',
  description: 'Testing movie service, movie 3',
  price: 99,
  imageUrl: 'https://www.testmovie3.com',
  year: 1993,
  added: '1937',
  productCategory: [{ id: 8, name: 'Comedy' }],
};

const mockMovieArray: IMovie[] = [mockMovie1, mockMovie2, mockMovie3];

export { mockMovie1, mockMovie2, mockMovie3, mockMovieArray };
