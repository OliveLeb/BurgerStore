import React, { useContext, useEffect } from 'react';
import { Context as ArticleContext } from '../context/ArticleContext';
import UploadService from '../services/Services';

const UploadFiles = () => {
  const { state } = useContext(ArticleContext);
  const { isUploaded, selectedFiles, articleCreated } = state;

  useEffect(() => {
    const submitForm = () => {
      const formData = new FormData();
      formData.append('image', selectedFiles.selectedFiles);
      UploadService.upload(formData)
        .then((res) => {
          console.log(articleCreated.image);
        })
        .catch((e) => {
          console.log(e);
          alert('File upload error');
        });
    };

    if (isUploaded) submitForm();
  }, [isUploaded]);

  return <div></div>;
};

export default UploadFiles;
