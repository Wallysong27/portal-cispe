// IMPORTAÇÕES DO MOTION, REACT-ROUTER-DOM SLIDER E IMAGENS USADAS NA APLICAÇÃO
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mosquito from "../../assets/img/arboviroses/dengue.png";
import ArbovirosesImg from "../../assets/img/home/arboviroses.png";

export default function Arboviroses() {
  // DETERMINANDO A TRANSIÇÃO ENTRE TELAS DESKTOP E MOBILE
  const isMobile = useMediaQuery({ query: "(max-width: 959px)" });

  // CONFIGURAÇÕES DO SLIDER PARA DISPOSITIVOS MOBILE
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  {
    /* FRAGMENT QUE ENGLOBA TODO O CÓDIGO */
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {/* DIV DO TÍTULO DO COMPONENTE DE ARBOVIROSES */}
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img src={ArbovirosesImg} alt="Coração do título" className="h-14" />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Arboviroses
          </h1>
        </div>

        {/* CÓDIGO PARA DISPOSITIVOS MOBILE */}
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
                  <div className="relative bg-white rounded-full p-3 w-3/4 border-8 border-[#4D824B]">
                    <img src={Mosquito} alt="" />
                    <div className="absolute w-full border-4 bg-[#4D824B] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#4D824B]"></div>
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Chikungunya
                  </span>
                </div>
              </Link>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiOThhYzAzY2UtZGY3Ni00ZWE0LTljZmQtY2FiMGExMjM0OTA3IiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="relative bg-white rounded-full p-3 w-3/4 border-8 border-[#08427E]">
                    <img src={Mosquito} alt="" className="w-full" />
                    <div className="absolute w-full border-4 bg-[#08427E] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#08427E]"></div>
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Dengue
                  </span>
                </div>
              </Link>
              {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO */}
              <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiYTU0NjJmODMtZTMwMy00OGUwLTljYjYtNDA3MjczY2VhNGQzIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
                target="_blank"
              >
                {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
                <div className="!flex flex-col items-center justify-center gap-1 px-2 md:px-6">
                  <div className="relative bg-white rounded-full p-3 w-3/4 border-8 border-[#A42106]">
                    <img src={Mosquito} alt="" className="w-full" />
                    <div className="absolute w-full border-4 bg-[#A42106] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#A42106]"></div>
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Zika
                  </span>
                </div>
              </Link>
            </Slider>
          </div>
        )}
        {/* A PARTIR DAQUI É VOLTADO PARA DISPOSITIVOS DESKTOP, A DISPOSIÇÃO DOS ITENS VOLTA A SER A LARGURA TOTAL DA TELA */}
        <div className="hidden lg:flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO DO INFORME DE CHIKUNGUNYA */}
          <Link
            className="h-full"
            to="https://app.powerbi.com/view?r=eyJrIjoiNDBlZDA1NDQtZGQwOS00YjE0LTgzNjEtYzVhNmZkMmIzMWEyIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
              <div className="relative bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7 border-8 border-[#4D824B]">
                <img src={Mosquito} alt="" />
                <div className="absolute w-full border-4 bg-[#4D824B] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#4D824B]"></div>
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#4D824B] mb-5">
                Chikungunya
              </span>
            </motion.div>
          </Link>
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO DO INFORME DE DENGUE */}
          <Link
            className="h-full"
            to="https://app.powerbi.com/view?r=eyJrIjoiOThhYzAzY2UtZGY3Ni00ZWE0LTljZmQtY2FiMGExMjM0OTA3IiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="h-40 w-60 lg:h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
              <div className="relative bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7 border-8 border-[#08427E]">
                <img src={Mosquito} alt="" />
                <div className="absolute w-full border-4 bg-[#08427E] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#08427E]"></div>
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#08427E] mb-5">
                Dengue
              </span>
            </motion.div>
          </Link>
          {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O ENDEREÇO CORRETO DO INFORME DE ZIKA */}
          <Link
            className="h-full"
            to="https://app.powerbi.com/view?r=eyJrIjoiYTU0NjJmODMtZTMwMy00OGUwLTljYjYtNDA3MjczY2VhNGQzIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
            target="_blank"
          >
            {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
            <motion.div
              className="w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              {/* DIV QUE ENGLOBA O ÍCONE DO ITEM E SUA DESCRIÇÃO */}
              <div className="relative bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7 border-8 border-[#A42106]">
                <img src={Mosquito} alt="" />
                <div className="absolute w-full border-4 bg-[#A42106] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-[#A42106]"></div>
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#A42106] mb-5">
                Zika
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
