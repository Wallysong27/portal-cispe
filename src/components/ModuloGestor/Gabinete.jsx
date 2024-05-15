// IMPORTAÇÕES DO REACT-ROUTER-DOM E IMAGENS UTILIZADAS NA APLICAÇÃO
import { Link } from "react-router-dom";

import Asseimp from "../../assets/img/moduloGestor/gabinete/asseimp.png";
import Carnaval from "../../assets/img/moduloGestor/gabinete/carnaval.png";
import CuidaPe from "../../assets/img/moduloGestor/gabinete/cuida-pe.png";
import DiagnosticoPreliminar from "../../assets/img/moduloGestor/gabinete/diagnostico-preliminar.png";
import EstoqueFarmacias from "../../assets/img/moduloGestor/gabinete/estoque-farmacias.png";
import GerenciaConsultiva from "../../assets/img/moduloGestor/gabinete/gerencia-consultiva.png";
import GJC from "../../assets/img/moduloGestor/gabinete/gerencia-juridica-contratos.png";
import GJCCONV from "../../assets/img/moduloGestor/gabinete/gerencia-juridica-convenios-contratos-gestao.png";
import Ouvidoria from "../../assets/img/moduloGestor/gabinete/ouvidoria.png";
import Publicacoes from "../../assets/img/moduloGestor/gabinete/publicacoes.png";

// FRAGMENT QUE ENGLOBA TODO O CÓDIGO
export default function Gabinete() {
  return (
    <>
      {/* ASSEIMP NOTÍCIAS */}
      <Link
        to="https://powerbi.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/ASSEIMP%20NOT%C3%8DCIAS?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={Asseimp} alt="Imagem do Painel de ASSEIMP Notícias" />
          <span className="absolute bottom-4 uppercase text-center">
            ASSEIMP Notícias
          </span>
        </div>
      </Link>
      {/* CARNAVAL */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20manual/CARNAVAL?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={Carnaval} alt="Imagem do Painel do Carnaval" />
          <span className="absolute bottom-4 uppercase text-center">
            Carnaval
          </span>
        </div>
      </Link>
      {/* CUIDA PE */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/CUIDAPE?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={CuidaPe} alt="Imagem do Painel do Cuida PE" />
          <span className="absolute bottom-4 uppercase text-center">
            Cuida PE
          </span>
        </div>
      </Link>
      {/* DIAGNÓSTICO PRELIMINAR */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20manual/DIAGNOSTICOPRELIMINAR?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={DiagnosticoPreliminar}
            alt="Imagem do Painel de Diagnóstico Preliminar"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Diagnóstico Preliminar
          </span>
        </div>
      </Link>
      {/* ESTOQUE DAS FARMÁCIAS */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiOGU0OTNiM2ItMjNiNi00YTAxLWJmMzAtYTU2MTNjZDVjYmIwIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={EstoqueFarmacias}
            alt="Imagem do Painel do Estoque das Farmácias"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Estoque das Farmácias
          </span>
        </div>
      </Link>
      {/* GERÊNCIA CONSULTIVA */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/GCONS-GER%C3%8ANCIA%20CONSULTIVA?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={GerenciaConsultiva}
            alt="Imagem do Painel da Gerência Consultiva"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Gerência Consultiva
          </span>
        </div>
      </Link>
      {/* GERÊNCIA JURÍDICA DE CONTRATOS */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/JUR%C3%8DDICO%20-%20GJC?rs:embed-true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={GJC} alt="Imagem do Painel da Gerência de Contratos" />
          <span className="absolute bottom-4 uppercase text-center">
            Gerência Jurídica de Contratos
          </span>
        </div>
      </Link>
      {/* GERÊNCIA JURÍDICA DE CONVÊNIOS E CONTRATOS DE GESTÃO */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/GJCONV-GER%C3%8ANCIA%20JUR%C3%8DDICA%20DE%20CONV%C3%8ANIOS%20E%20CONTRATOS%20DE%20GEST%C3%83O?rs:embed-true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={GJCCONV}
            alt="Imagem do Painel da Gerência Jurídica de Convênios e Contratos de Gestão"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Gerência Jurídica de Convênios e Contratos de Gestão
          </span>
        </div>
      </Link>
      {/* OUVIDORIA */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/MONITORAMENTO%20OUVIDORIA?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={Ouvidoria} alt="Imagem do Painel da Ouvidoria" />
          <span className="absolute bottom-4 uppercase text-center">
            Ouvidoria
          </span>
        </div>
      </Link>
      {/* PUBLICAÇÕES CEPE */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/PUBLICACOES?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={Publicacoes} alt="Imagem do Painel de Publicações CEPE" />
          <span className="absolute bottom-4 uppercase text-center">
            Publicações CEPE
          </span>
        </div>
      </Link>
    </>
  );
}
