import { Link } from "react-router-dom";

import AtualizacaoCadastral from "../../assets/img/moduloGestor/seas/atualizacao-cadastral.png";
import CuidaPe from "../../assets/img/moduloGestor/seas/cuida-pe.png";
import EmergenciaSeisGrandes from "../../assets/img/moduloGestor/seas/emergencia-seis-grandes.png";
import EstoqueFarmacias from "../../assets/img/moduloGestor/seas/estoque-farmacias.png";

export default function Seas() {
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
      {/* Emergência dos 6 Grandes */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiNDY1OGIyZWMtZTVhZi00MzM0LTg4MmQtM2M4ZjFiYmE4MDA3IiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={EmergenciaSeisGrandes}
            alt="Imagem do Painel de Emergência dos 6 Grandes"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Emergência dos 6 Grandes
          </span>
        </div>
      </Link>
      {/* Estoque das Farmácias */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiOGU0OTNiM2ItMjNiNi00YTAxLWJmMzAtYTU2MTNjZDVjYmIwIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16">
          <img
            src={EstoqueFarmacias}
            alt="Imagem do Painel do Estoque das Farmácias"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Estoque das Farmácias
          </span>
        </div>
      </Link>
    </>
  );
}
