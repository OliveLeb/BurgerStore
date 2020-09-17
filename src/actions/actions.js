export const cancel = (dispatch) => {
  return () =>
    dispatch({
      type: 'SUBMIT_CANCELLED',
    });
};

export const upload = (dispatch, inputImage) => {
  return () =>
    dispatch({
      type: 'UPLOAD_SUCCESS',
      selectedFiles: inputImage.current.files[0],
    });
};

export const updateField = (dispatch) => {
  return (e) =>
    dispatch({
      type: 'MODIFY_ARTICLE',
      [e.target.name]: e.target.value,
    });
};
export const updateImageInput = (dispatch, inputImage) => {
  return () =>
    dispatch({
      type: 'MODIFY_ARTICLE',
      image: inputImage.current.files[0].name,
    });
};
