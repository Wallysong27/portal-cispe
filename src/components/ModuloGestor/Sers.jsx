import { Link } from "react-router-dom";

import CuidaPe from "../../assets/img/moduloGestor/sers/cuida-pe.png";
import Habilitacoes from "../../assets/img/moduloGestor/sers/habilitacoes.png";
// import LeitosSrag from "../../assets/img/moduloGestor/leitos-srag.png";

export default function Sers() {
  return (
    <>
      {/* Cuida PE */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/CUIDAPE?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img src={CuidaPe} alt="Imagem do Painel do Cuida PE" />
          <span className="absolute bottom-4 uppercase text-center">
            Cuida PE
          </span>
        </div>
      </Link>
      {/* Habilitações */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/HABITA%C3%87%C3%95ES?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img src={Habilitacoes} alt="Imagem do Painel de Habilitações" />
          <span className="absolute bottom-4 uppercase text-center">
            Habilitações
          </span>
        </div>
      </Link>
      {/* Leitos SRAG */}
      {/* <Link to='' target="_blank">
      <div className="w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-6">
        <img src={LeitosSrag} alt="Imagem do Painel de Leitos SRAG" />
        <span className="uppercase text-center">Leitos SRAG</span>
      </div> 
      </Link>
      */}
    </>
  );
}
