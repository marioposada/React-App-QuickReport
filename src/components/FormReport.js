import React from "react";
import "./formReport.css";
import { useRef, useState } from "react";

// Objeto para limpiar el formulario
const initialForm = {
  informe: "",
  fecha: "",
  proveedor: "",
  oe: "",
  remito: "",
  cid: "",
  cliente: "",
  plano: "",
  ubicacion: "",
  file: [],
  comments: "",
};

// Funcion que valida los campos del formulario
const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  // Validacion del numero de informe
  if (!form.informe.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.informe.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.fecha.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.fecha.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.proveedor.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

// Componente FormReport del proyecto quickReport

const FormReport = () => {
  const inputFile = useRef();
  const imageSelected = useRef();
  const [file, setFile] = useState({});
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Manejador de los evento del formulario, en este caso captura los campos de texto, numeral
  const handleChange = (e) => {

    // Si es una imagen, la cargo en el formulario y la anexo al objeto para enviar a la BD
    if (e.target.type === "file") {
      alert("Es un archivo");
      const fil = e.target.files[0];
      const reader = new FileReader();
      console.log(reader.readyState);

      // Asignamos un escuchador de eventos al reader
      reader.addEventListener(
        "load",
        () => {
          // convierte la imagen a una cadena en base64 y la asigna a la propiedad
          // de la referencia de la imagen en el formulario

          imageSelected.current.src = reader.result;
        },
        false
      );

      // Lee la imagen desde e.target.files[0] obtenida desde el formulario
      reader.readAsDataURL(fil);
      // console.log(reader);
    } else {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
}

  // Manejador de los campos del formulario, en este caso captura cuando dejamos de hacer foco en los imputs
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  // Manejador del formulario, especialmente el evento submit.
  const handleSubmit = (e) => {
    e.preventDefault();

    //Este metodo valida los campos y asigna errores en el caso que los haya
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

  return (
    <div className="wrapperForm">
      <h2 className="title">Generar reporte</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="informe">N Informe</label>
        <input
          type="number"
          name="informe"
          placeholder="N° Informe"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.informe}
          required
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          name="fecha"
          placeholder="Fecha"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fecha}
          required
        />
        <label htmlFor="proveedor">Proveedor</label>
        <input
          type="text"
          name="proveedor"
          placeholder="Proveedor"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.proveedor}
          required
        />
        <label htmlFor="oe">Orden de entrega</label>
        <input
          type="number"
          name="oe"
          placeholder="OE N°"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.oe}
          required
        />
        <label htmlFor="remito">Remito</label>
        <input
          type="number"
          name="remito"
          placeholder="N° Remito"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.remito}
          required
        />
        <label htmlFor="cid">CID</label>
        <input
          type="text"
          name="cid"
          placeholder="CID"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.cid}
          required
        />
        <label htmlFor="cliente">Cliente</label>
        <input
          type="text"
          name="cliente"
          placeholder="Urquiza/Emova/etc"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.cliente}
          required
        />
        <label htmlFor="plano">Numero de plano</label>
        <input
          type="text"
          name="plano"
          placeholder="Numero de plano"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.plano}
          required
        />
        <label htmlFor="ubicacion">Ubicacion</label>
        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicacion del producto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.ubicacion}
          required
        />
        <label htmlFor="file">Imagen</label>
        <img ref={imageSelected} width="25px" alt={form.name} src={file} />
        <input
          type="file"
          name="file"
          placeholder="Imagen"
          value={form.file}
          onChange={handleChange}
          accept="image/*"
          ref={inputFile}
          required
        />
        

        <textarea
          name="comments"
          cols="50"
          rows="5"
          value={form.comments}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" name="enviar" value="Enviar" ref={inputFile} />
      </form>
    </div>
  );
};

export default FormReport;
