// IMPORTAÇÕES DO MOTION, REACT-ROUTER-DOM SLIDER E IMAGENS USADAS NA APLICAÇÃO
import LogoCispe from "../../assets/img/home/logoCispe.png";
// import Arboviroses from "../../assets/img/home/arboviroses.png";
import Covid from "../../assets/img/home/covid.png";
import Gestor from "../../assets/img/home/gestor.png";
import Geres from "../../assets/img/home/geres.png";
import Populacao from "../../assets/img/home/populacao.png";
import VigilanciaEmSaude from "../../assets/img/home/vigilancia-em-saude.png";
import Mapa from "../../assets/img/home/mapa.png";
import SalaDeSituacao from "../../assets/img/home/sala-de-situacao.png";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Home() {
  // DETERMINANDO A TRANSIÇÃO ENTRE TELAS DESKTOP E MOBILE
  const isMobile = useMediaQuery({ query: "(max-width: 1139px)" });

  // CONFIGURAÇÕES DO SLIDER PARA DISPOSITIVOS MOBILE
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  {
    /* FRAGMENT QUE ENGLOBA TODO O CÓDIGO */
  }
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="relative flex items-center justify-center h-screen w-full px-10 md:px-20">
          {/* DIV ONDE SE ENCONTRA A LOGO DO CIS PE NO CENTRO DA PÁGIN */}
          <img
            src={LogoCispe}
            alt=""
            className="absolute top-[40%] transform -translate-y-1/2 px-10"
          />
        </div>
        {/* CÓDIGO PARA DISPOSITIVOS MOBILE */}
        {isMobile && (
          <div className="absolute bottom-40 sm:bottom-24 w-full lg:w-3/4 px-10 md:px-20">
            {/* SENDO MOBILE, A DISPOSIÇÃO DOS BOTÕES NA TELA SE TORNA UM SLIDER */}
            <Slider {...settings}>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DA SAÚDE DO CIDADÃO */}
              <Link to="/saude-do-cidadao">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Populacao} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Saúde do Cidadão
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DAS GERES */}
              <Link to="">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Geres} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Geres
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DA VIGILÂNCIA EM SAÚDE */}
              <Link to="/vigilancia-em-saude">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={VigilanciaEmSaude} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Vigilancia em Saúde
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO DA SALA DE SITUAÇÃO */}
              <Link to="https://salasituacao.saude.pe.gov.br/QvAJAXZfc/salasituacao.htm">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-4 sm:p-5 md:p-7">
                    <img src={SalaDeSituacao} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Sala de Situação
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DE COVID-19 */}
              <Link to="/covid-19">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Covid} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Covid-19
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DAS ARBOVIROSES */}
              {/* <Link to="/arboviroses">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Arboviroses} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856]">
                    Arboviroses
                  </span>
                </div>
              </Link> */}

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DO OBSERVA PE */}
              <Link to="/mapas">
              {/* <Link to="/observa-pe"> */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Mapa} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Observa PE
                  </span>
                </div>
              </Link>

              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA CORRETA DO MÓDULO GESTOR */}
              <Link to="/modulo-gestor/paineis">
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 md:p-7">
                    <img src={Gestor} alt="" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Módulo Gestor
                  </span>
                </div>
              </Link>
            </Slider>
          </div>
        )}

        {/* FIM DO CÓDIGO PARA DISPOSITIVOS MOBILE E INÍCIO PARA TELAS DESKTOP */}
        <div className="absolute bottom-20 h-48 2xl:h-52 hidden xl:flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/saude-do-cidadao"
          >
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Populacao} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Saúde do Cidadão
              </span>
            </motion.div>
          </Link>

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to=""
          >
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="relative h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Geres} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Geres
              </span>
              <span className="absolute -bottom-2 text-sm text-[#0C2856]">
                (Em construção)
              </span>
            </motion.div>
          </Link>

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/vigilancia-em-saude"
          >
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="relative h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={VigilanciaEmSaude} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-base text-[#0C2856] mb-5 text-center">
                Vigilância em Saúde
              </span>
            </motion.div>
          </Link>

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="https://salasituacao.saude.pe.gov.br/QvAJAXZfc/salasituacao.htm"
          >
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={SalaDeSituacao} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Sala de Situação
              </span>
            </motion.div>
          </Link>

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/covid-19"
          >
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Covid} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Covid-19
              </span>
            </motion.div>
          </Link>

          {/* <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/arboviroses"
          >
            <motion.div
              className="relative h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Arboviroses} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Arboviroses
              </span>
              <span className="absolute -bottom-2 text-xs 2xl:text-sm text-[#0C2856] text-center">
                (Dengue, Zika e Chikun.)
              </span>
            </motion.div>
          </Link> */}

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/mapas"
          >
            {/* <Link
              className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
              to="/observa-pe"
            > */}
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Mapa} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Observa PE
              </span>
            </motion.div>
          </Link>

          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
          <Link
            className="h-full w-[200px] flex flex-col items-center justify-center gap-1 cursor-pointer"
            to="/modulo-gestor/paineis"
          >
            {/* DIV FEITA COM MOTION PARA INCLUIR EFEITOS NA MESMA, TAL DIV ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
            <motion.div
              className="h-full w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="h-3/4 bg-white rounded-full p-5">
                <img src={Gestor} alt="" className="h-full" />
              </div>
              <span className="font-semibold text-sm 2xl:text-lg text-[#0C2856] mb-5">
                Módulo Gestor
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
