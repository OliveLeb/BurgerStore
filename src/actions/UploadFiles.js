import React, { useContext, useEffect } from 'react';
import { Context as ArticleContext } from '../context/ArticleContext';
import UploadService from '../services/Services';
import { toast } from 'react-toastify';

const UploadFiles = () => {
  const { state } = useContext(ArticleContext);
  const { isUploaded, selectedFiles } = state;

  useEffect(() => {
    const submitForm = () => {
      const formData = new FormData();
      formData.append('image', selectedFiles.selectedFiles);
      UploadService.upload(formData)
        .then((res) => {
          toast.success('Image upload avec succès !');
        })
        .catch((e) => {
          console.log(e);
          toast.error("Erreur lors de l'upload de l'image");
        });
    };

    if (isUploaded) submitForm();
  }, [isUploaded]);

  return <div></div>;
};

export default UploadFiles;
