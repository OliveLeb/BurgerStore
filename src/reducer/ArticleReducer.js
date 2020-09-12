export const initialState = {
  articles: [],
  articleById: {},
  articleCreated: {
    name: '',
    description: '',
    price: '',
    image: '',
    category: 0,
  },
  selectedFiles: '',
  isLoading: false,
  hasError: false,
  isDeleted: false,
  isSubmitted: false,
  isCreated: false,
  isUploaded: false,
};

const ArticleReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        articles: [],
        isLoading: true,
        hasError: false,
      };
    case 'GET_ARTICLES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        isCreated: false,
        articles: [...state.articles, ...action.payload],
      };
    case 'GET_ARTICLES_FAILURE':
      return {
        ...state,
        hasError: true,
      };
    case 'GET_ARTICLEBYID_SUCCESS':
      return {
        ...state,
        isCreated: false,
        articleById: { ...action.payload },
      };
    case 'GET_ARTICLEBYID_FAILURE':
      return {
        ...state,
        hasError: true,
      };
    case 'CREATE_INIT':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        articleById: {},
        isSubmitted: false,
      };
    case 'NEW_ARTICLE':
      return {
        ...state,
        articleCreated: { ...state.articleCreated, ...action },
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitted: true,
      };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        isUploaded: !state.isUploaded,
        selectedFiles: { ...action },
      };
    case 'SUBMIT_CANCELLED':
      return {
        ...state,
        isSubmitted: false,
      };
    case 'CREATE_ARTICLE_SUCCESS':
      return {
        ...state,
        articleCreated: { ...state.article, ...action.payload },
        hasError: false,
        isSubmitted: false,
        isCreated: true,
        isDeleted: false,
      };
    case 'CREATE_ARTICLE_FAILURE':
      return {
        ...state,
        articleCreated: { ...state.article, ...action.payload },
        hasError: true,
        isCreated: false,
      };
    case 'DELETE_ARTICLE_SUCCESS':
      return {
        ...state,
        articles: [...action.payload],
        isDeleted: true,
      };
    case 'DELETE_ARTICLE_FAILURE':
      return {
        ...state,
        isDeleted: false,
      };
    default:
      return {
        state,
      };
  }
};

export default ArticleReducer;

//export const { Context, Provider } = DataContext(ArticleReducer, initialState);
