import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PainelLeitos from "../../assets/img/covid/leitos.png";
import InformeEpidemiologico from "../../assets/img/covid/informeEpidemiologico.png";
// import PainelCovid from "../../assets/img/covid/covid.png";
import CovidImg from "../../assets/img/home/covid.png";

export default function Covid() {
  // DETERMINANDO A TRANSIÇÃO ENTRE TELAS DESKTOP E MOBILE
  const isMobile = useMediaQuery({ query: "(max-width: 539px)" });

  // CONFIGURAÇÕES DO SLIDER
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  {
    /* FRAGMENT QUE ENGLOBA TODO O CÓDIGO */
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {/* DIV DO TÍTULO DO COMPONENTE DE COVID */}
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img src={CovidImg} alt="Coração do título" className="h-14" />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Covid-19
          </h1>
        </div>

        {/* CÓDIGO PARA DISPOSITIVOS MOBILE */}
        {isMobile && (
          <div className="absolute top-1/2 sm:bottom-24 w-full lg:w-3/4 px-10 md:px-20">
            {/* SENDO MOBILE, A DISPOSIÇÃO DOS BOTÕES NA TELA SE TORNA UM SLIDER */}
            <Slider {...settings}>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiMWFkYjA5OGYtNWYyNS00NjFkLThhZDYtZDk4ZGM5Y2Q1OTQ4IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-6 w-2/4">
                    <img
                      src={InformeEpidemiologico}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Informe Epidemiológico
                  </span>
                </div>
              </Link>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiN2RjMGY5YmQtZDBlOC00NWUzLWJkNzUtOTUxYzYyOWNhMGI0IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-7 w-2/4">
                    <img src={PainelLeitos} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Painel de Leitos SRAG
                  </span>
                </div>
              </Link>
            </Slider>
          </div>
        )}
        {/* A PARTIR DAQUI É VOLTADO PARA DISPOSITIVOS DESKTOP, A DISPOSIÇÃO DOS ITENS VOLTA A SER A LARGURA TOTAL DA TELA */}
        <div className="hidden sm:flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full"
            to="https://app.powerbi.com/view?r=eyJrIjoiMWFkYjA5OGYtNWYyNS00NjFkLThhZDYtZDk4ZGM5Y2Q1OTQ4IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="relative w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7">
                <img src={InformeEpidemiologico} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Coronavírus
              </span>
              <span className="absolute bottom-14 md:bottom-3 text-xs 2xl:text-sm text-[#0C2856]">
                (Covid-19)
              </span>
            </motion.div>
          </Link>
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full"
            to="https://app.powerbi.com/view?r=eyJrIjoiN2RjMGY5YmQtZDBlOC00NWUzLWJkNzUtOTUxYzYyOWNhMGI0IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7">
                <img src={PainelLeitos} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Painel de Leitos SRAG
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
