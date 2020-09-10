import DataContext from './DataContext';
import ArticleReducer, { initialState } from '../reducer/ArticleReducer';

export const { Context, Provider } = DataContext(ArticleReducer, initialState);
