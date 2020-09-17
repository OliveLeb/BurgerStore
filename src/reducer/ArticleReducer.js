export const initialState = {
  articles: [],
  articleById: {},
  selectedFiles: '',
  isLoading: false,
  hasError: false,
  isDeleted: false,
  isSubmitted: false,
  isCreated: false,
  isUploaded: false,
  nameValid: false,
  descriptionValid: false,
  priceValid: false,
  imageValid: false,
  formValid: false,
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
    case 'GET_ARTICLEBYID_SUCCESS':
      return {
        ...state,
        isCreated: false,
        articleById: { ...action.payload },
      };
    case 'HAS_ERROR':
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
        isUploaded: false,
      };
    case 'MODIFY_ARTICLE':
      return {
        ...state,
        articleById: { ...state.articleById, ...action },
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        isSubmitted: true,
      };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        isUploaded: true,
        selectedFiles: { ...action },
      };
    case 'SUBMIT_CANCELLED':
      return {
        ...state,
        isSubmitted: false,
        articleCreated: {
          name: '',
          description: '',
          price: '',
          image: '',
          category: 0,
        },
        articleById: {},
      };
    case 'CREATE_ARTICLE_SUCCESS':
      return {
        ...state,
        articleById: { ...state.article, ...action.payload },
        hasError: false,
        isSubmitted: false,
        isCreated: true,
        isDeleted: false,
      };
    case 'CREATE_ARTICLE_FAILURE':
      return {
        ...state,
        articleById: { ...state.article, ...action.payload },
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
