import { Link } from "react-router-dom";

import AtualizacaoCadastral from "../../assets/img/moduloGestor/segtes/atualizacao-cadastral.png";
import SecGtes from "../../assets/img/moduloGestor/segtes/segtes.png";

export default function Segtes() {
  return (
    <>
      {/* Atualização Cadastral dos Médicos */}
      <Link to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/MONITORAMENTO%20RECADASTRAMENTO%20DOS%20MEDICOS?rs:embed=true" target="_blank">
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={AtualizacaoCadastral}
            alt="Imagem do Painel da Atualização Cadastral dos Médicos"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Atualização Cadastral dos Médicos
          </span>
        </div>
      </Link>
      {/* Secretaria Executiva de Gestão do Trabalho e Educação na Saúde */}
      <Link to="https://powerbi.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/SEGTES%20-%20SECRETARIA%20EXECUTIVA%20DE%20GEST%C3%83O%20DO%20TRABALHO%20E%20EDUCA%C3%87%C3%83O%20NA%20SA%C3%9ADE?rs:embed=true" target="_blank">
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={SecGtes}
            alt="Imagem do Painel da Secretaria Executiva de Gestão do Trabalho e Educação na Saúde"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Secretaria Executiva de Gestão do Trabalho e Educação na Saúde
          </span>
        </div>
      </Link>
    </>
  );
}
