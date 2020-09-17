import { initialState } from './ArticleReducer';

const CombineReducers = (...reducers) => (state = initialState, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

export default CombineReducers;
