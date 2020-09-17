/*export const initialState ={
    nameValid:false,
    descriptionValid:false,
    priceValid:false,
    imageValid:false,
    formValid:false,
}*/

const FormValidationReducer = (state, action) => {
  switch (action.type) {
    case '':
      return {};
    default:
      return state;
  }
};

export default FormValidationReducer;
