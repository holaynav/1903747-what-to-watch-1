import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Reviews } from './review';
import { Film, Films } from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type MainData = {
  amountToShow: number;
  error: string | null;
}

export type FilmData = {
  films: {
    data: Films;
    isLoading: boolean;
  };
  promoFilm: {
    data: Film | null;
    isLoading: boolean;
  };
  currentFilm: {
    data: Film | null;
    reviews: Reviews;
    isLoading: boolean;
  };
  similarFilms: {
    data: Films | null;
    isLoading: boolean;
  };
  currentGenre: string;
  genres: string[] | null;
}
