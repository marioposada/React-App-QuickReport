import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verificamos que sea un "File"

    if (e.target.type === "file") {
      alert("Es un file");
      const file = e.target.file[0];
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          // convierte la imagen a una cadena en base64
          current.imageSelected.src = reader.result;
        },
        false
      );
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  // const handlePreviewFile = (e) => {
  //   const preview = document.querySelector('img');
  // const file = document.querySelector('input[type=file]').files[0];
  // const reader = new FileReader();

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    console.log(form);
    alert(form);
    if (Object.keys(errors).length === 0) {
      alert("enviando formulario");
      setLoading(false);
      setResponse(true);
      setForm(initialForm);
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    // handlePreviewFile
  };
};
