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

const FormReport = () => {
  return (
    <div className="wrapperForm">
      <h2 className="title">Formulario</h2>
      <form className="form">
        <input type="number" name="informe" placeholder="N° Informe" required />
        <input type="date" name="fecha" placeholder="Fecha" required />
        <input type="text" name="proveedor" placeholder="Proveedor" required />
        <input type="number" name="oe" placeholder="OE N°" required />
        <input type="number" name="remito" placeholder="N° Remito" required />
        <input type="text" name="cid" placeholder="CID" required />
        <input
          type="text"
          name="cliente"
          placeholder="Urquiza/Emova/etc"
          required
        />
        <input
          type="text"
          name="plano"
          placeholder="Numero de plano"
          required
        />
        <input
          type="text"
          name="ubicacion"
          placeholder="Ubicacion del producto"
          required
        />
        <input type="file" name="file" placeholder="Imagen" required />

        <textarea name="comments" cols="50" rows="5" required></textarea>
        <input type="submit" name="enviar" value="Enviar" />
      </form>
    </div>
  );
};

export default FormReport;
