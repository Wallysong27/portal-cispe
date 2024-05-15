import { Link } from "react-router-dom";

import MapaSaudeBucal from "../../assets/img/moduloGestor/sevsap/mapa-saude-bucal.png";
import MonitoramentoDesastres from "../../assets/img/moduloGestor/sevsap/monitoramento-desastres.png";
import NucleoPromocaoSaude from "../../assets/img/moduloGestor/sevsap/nucleo-promocao-saude.png";
import Vacinacao from "../../assets/img/moduloGestor/sevsap/vacinacao.png";

export default function Sevsap() {
  return (
    <>
      {/* Mapa da Saúde Bucal */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiZjhiOWI5YWItYWE2MS00MGJkLWI2NmMtZGIxNGUzZmZlNDcxIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={MapaSaudeBucal}
            alt="Imagem do Painel do Mapa da Saúde Bucal"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Mapa da Saúde Bucal
          </span>
        </div>
      </Link>
      {/* Monitoramento de Desastres */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/MONITORAMENTO%20DE%20DESASTRE?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={MonitoramentoDesastres}
            alt="Imagem do Painel de Monitoramento de Desastres"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Monitoramento de Desastres
          </span>
        </div>
      </Link>
      {/* Núcleos de Promoção da Saúde (Público) */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiM2NiZGYyMDktZWIyMy00M2M3LTgzMDktYzI0MjAxOGQ1ZmNiIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={NucleoPromocaoSaude}
            alt="Imagem do Painel de Núcleos de Promoção da Saúde (Público)"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Núcleos de Promoção da Saúde (Público)
          </span>
        </div>
      </Link>
      {/* Núcleos de Promoção da Saúde (Privado) */}
      <Link
        to="https://powerbi.ati.pe.gov.br/relatorios/powerbi/SES/DGMOG/BI%20autom%C3%A1tico/POLOS%20DE%20ACADEMIA%20NO%20ESTADO?rs:embed=true"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img
            src={NucleoPromocaoSaude}
            alt="Imagem do Painel de Núcleos de Promoção da Saúde (Privado)"
          />
          <span className="absolute bottom-4 uppercase text-center">
            Núcleos de Promoção da Saúde (Privado)
          </span>
        </div>
      </Link>
      {/* Vacinação Covid-19 */}
      <Link
        to="https://app.powerbi.com/view?r=eyJrIjoiOTMwYjhiMDMtNWQxYy00NzJjLTkxMDMtM2U2ZjBhZDRiY2M4IiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
        target="_blank"
      >
        <div className="relative w-[300px] h-[300px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5 p-16 cursor-pointer">
          <img src={Vacinacao} alt="Imagem do Painel de Vacinação Covid-19" />
          <span className="absolute bottom-4 uppercase text-center">
            Vacinação Covid-19
          </span>
        </div>
      </Link>
    </>
  );
}
