import React from "react";
import './TodosError.css';
import { ReactComponent as ErrorTextSvg } from "./error-text.svg";
import { ReactComponent as ComputerSvg } from "./computer-fail.svg";

function TodosError() {
  return (
    <div className="todos-error">
      <div className="error-card">
      <div className="error-card-title">
        <ErrorTextSvg className="error-card-svg-error" />
      </div>
      <div className="error-card-description">
        <p>Oh... No podemos procesar tu solicitud en estos momentos...</p>
        <ComputerSvg className="error-card-svg-computer" />
      </div>
      <div className="error-card-actions">
        <div></div>
        <button className="error-card-accept">Intentar nuevamente</button>
      </div>
    </div>
    </div>
    
  );
}

export { TodosError };
