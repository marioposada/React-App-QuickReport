import React from "react";
import "./formReport.css"

const FormReport = () => {
  return (
    <div>
      <h2 className="title">Formulario</h2>
      <form className="form">
        <input type="text" name="name" placeholder="Escribe tu nombre" required />
        <input type="text" name="email" placeholder="Escribe tu nombre" required/>
        <input type="date" />
        <input type="text" />
      <textarea name="comments"  cols="50" rows="5"></textarea>

      </form>
    </div>
  );
};

export default FormReport;
