import React from 'react';
import { Context as ArticleContext } from '../context/ArticleContext';
import FetchArticles from '../actions/FetchArticles';

const Englobant = (WrappedComponent) => (props) => {
  FetchArticles();

  return (
    <ArticleContext.Consumer>
      {({ state, dispatch }) => {
        return (
          <WrappedComponent
            {...props}
            articles={state.articles}
            state={state}
            dispatch={dispatch}
          />
        );
      }}
    </ArticleContext.Consumer>
  );
};

export default Englobant;
