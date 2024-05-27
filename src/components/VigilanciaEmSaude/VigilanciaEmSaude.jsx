// IMPORTAÇÕES DO MOTION, REACT-ROUTER-DOM SLIDER E IMAGENS USADAS NA APLICAÇÃO
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VigilanciaEmSaudeImg from "../../assets/img/home/vigilancia-em-saude.png";
import Zoonoses from "../../assets/img/vigilanciaEmSaude/zoonoses.png";
import ArbovirosesImg from "../../assets/img/vigilanciaEmSaude/arboviroses.png";
import Coronavirus from "../../assets/img/vigilanciaEmSaude/covid.png";
import Leitos from "../../assets/img/vigilanciaEmSaude/leitos.png";

export default function VigilanciaEmSaude() {
  const isMobile = useMediaQuery({ query: "(max-width: 1319px)" });

  // CONFIGURAÇÕES DO SLIDER PARA DISPOSITIVOS MOBILE
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  // FRAGMENT QUE ENGLOBA TODO O CÓDIGO
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {/* DIV DO TÍTULO DO COMPONENTE DE ARBOVIROSES */}
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img
            src={VigilanciaEmSaudeImg}
            alt="Coração do título"
            className="h-14"
          />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Vigilância em Saúde
          </h1>
        </div>

        {isMobile && (
          <div className="absolute top-1/2 sm:bottom-24 w-full lg:w-3/4 px-10 md:px-20">
            {/* SENDO MOBILE, A DISPOSIÇÃO DOS BOTÕES NA TELA SE TORNA UM SLIDER */}
            <Slider {...settings}>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiNDBlZDA1NDQtZGQwOS00YjE0LTgzNjEtYzVhNmZkMmIzMWEyIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="relative bg-white rounded-full p-3 sm:p-5 w-3/4">
                    <img src={Zoonoses} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Zoonoses
                  </span>
                </div>
              </Link>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiMWFkYjA5OGYtNWYyNS00NjFkLThhZDYtZDk4ZGM5Y2Q1OTQ4IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="relative bg-white rounded-full p-3 sm:p-5 w-3/4">
                    <img src={Coronavirus} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Coronavirus
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
                  <div className="relative bg-white rounded-full p-3 sm:p-8 w-3/4">
                    <img src={Leitos} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Painel de Leitos SRAG
                  </span>
                </div>
              </Link>
              <Link to="/vigilancia-em-saude/arboviroses">
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="relative bg-white rounded-full p-3 sm:p-5 w-3/4">
                    <img src={ArbovirosesImg} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Arboviroses
                  </span>
                </div>
              </Link>
            </Slider>
          </div>
        )}

        <div className="hidden 2xl:flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO DO PAINEL DE ZOONOSES */}
          <Link
            to="https://app.powerbi.com/view?r=eyJrIjoiZjcxM2E0MTItZjNlZS00Zjg2LWIxZGYtMTY3ODIzMmJkYWU2IiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="relative w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-40 w-40 rounded-full p-7">
                <img src={Zoonoses} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Zoonoses
              </span>
              <span className="absolute bottom-3 text-sm text-[#0C2856]">
                (Leptospirose)
              </span>
            </motion.div>
          </Link>
          <Link
            to="https://app.powerbi.com/view?r=eyJrIjoiMWFkYjA5OGYtNWYyNS00NjFkLThhZDYtZDk4ZGM5Y2Q1OTQ4IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="relative w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-40 w-40 rounded-full p-7">
                <img src={Coronavirus} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Coronavírus
              </span>
              <span className="absolute bottom-3 text-sm text-[#0C2856]">
                (Covid-19)
              </span>
            </motion.div>
          </Link>
          <Link
            to="https://app.powerbi.com/view?r=eyJrIjoiN2RjMGY5YmQtZDBlOC00NWUzLWJkNzUtOTUxYzYyOWNhMGI0IiwidCI6IjY4OTJmMzE2LTdlYzUtNDcyYS1iNDRhLWNiZDI1OGE0Nzc5MCJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="relative w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-40 w-40 rounded-full p-7">
                <img src={Leitos} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Painel de Leitos SRAG
              </span>
            </motion.div>
          </Link>
          <Link to="/vigilancia-em-saude/arboviroses">
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="relative w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-40 w-40 rounded-full p-7">
                <img src={ArbovirosesImg} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Arboviroses
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
