import React from "react";
import "./formReport.css";
import { useForm } from "../hooks/useForm";

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

const validationsForm = (form) => {
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

const FormReport = () => {
  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm, validationsForm);
  return (
    <div className="wrapperForm">
      <h2 className="title">Generar reporte</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          name="informe"
          placeholder="N° Informe"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.informe}
          required
        />
        <input
          type="date"
          name="fecha"
          placeholder="Fecha"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fecha}
          required
        />
        <input
          type="text"
          name="proveedor"
          placeholder="Proveedor"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.proveedor}
          required
        />
        <input
          type="number"
          name="oe"
          placeholder="OE N°"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.oe}
          required
        />
        <input
          type="number"
          name="remito"
          placeholder="N° Remito"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.remito}
          required
        />
        <input
          type="text"
          name="cid"
          placeholder="CID"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.cid}
          required
        />
        <input
          type="text"
          name="cliente"
          placeholder="Urquiza/Emova/etc"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.cliente}
          required
        />
        <input
          type="text"
          name="plano"
          placeholder="Numero de plano"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.plano}
          required
        />
        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicacion del producto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.ubicacion}
          required
        />
        <input type="file" name="file" placeholder="Imagen" value={form.file} required />

        <textarea name="comments" cols="50" rows="5" value={form.comments} onChange={handleChange} required></textarea>
        <input type="submit" name="enviar" value="Enviar" />
      </form>
    </div>
  );
};

export default FormReport;
