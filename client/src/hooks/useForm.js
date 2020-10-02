// write your custom hook here to control your checkout form

import {useLocalStorage} from './useLocalStorage'
import React, {useState} from 'react'

export const useForm = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    return [values, handleChanges, handleSubmit, showSuccessMessage]
  }