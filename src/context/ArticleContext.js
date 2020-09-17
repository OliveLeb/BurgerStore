import DataContext from './DataContext';
import ArticleReducer, { initialState } from '../reducer/ArticleReducer';
import FormValidationReducer from '../reducer/FormValidationReducer';
import CombineReducers from '../reducer/CombineReducers';

export const { Context, Provider } = DataContext(
  CombineReducers(ArticleReducer, FormValidationReducer),
  initialState
);
