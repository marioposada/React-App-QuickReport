import React from "react";
import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    console.log(form)
    alert(form)
    if (Object.keys(errors).length===0) {
        alert("enviando formulario")
    }else {
        return
    }






  };
  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
