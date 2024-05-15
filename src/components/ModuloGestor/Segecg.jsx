import { Link } from "react-router-dom";

import Ibge from "../../assets/img/moduloGestor/segecg/ibge.png";

export default function Segecg() {
  return (
    <>
      {/* IBGE */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20manual/IBGE%20FREE?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img src={Ibge} alt="Imagem do Painel do IBGE" />
          <span className="absolute bottom-4 uppercase text-center">IBGE</span>
        </div>
      </Link>
    </>
  );
}
