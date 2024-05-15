import { Link } from "react-router-dom";

import EmendasEstaduais from "../../assets/img/moduloGestor/seaf/emendas-estaduais.png";
import EmendasFederais from "../../assets/img/moduloGestor/seaf/emendas-federais.png";

export default function Seaf() {
  return (
    <>
      {/* Emendas Estaduais */}
      <Link to="https://powerbi.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/EMENDAS%20ESTADUAIS?rs:embed=true" target="_blank">
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={EmendasEstaduais}
            alt="Imagem do Painel das Emendas Estaduais"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Emendas Estaduais
          </span>
        </div>
      </Link>
      {/* Emendas Federais */}
      <Link to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/EMENDAS%20FEDERAIS?rs:embed=true" target="_blank">
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={EmendasFederais}
            alt="Imagem do Painel das Emendas Federais"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Emendas Federais
          </span>
        </div>
      </Link>
    </>
  );
}
