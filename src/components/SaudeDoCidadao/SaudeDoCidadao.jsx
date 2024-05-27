import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Especialidades from "../../assets/img/saudeCidadao/especialidades.png";
// import BuscaPorSaude from "../../assets/img/saudeCidadao/buscaPorSaude.png";
// import Paineis from "../../assets/img/saudeCidadao/paineis.png";
import Coracao from "../../assets/img/saudeCidadao/coracao.png";

export default function SaudeDoCidadao() {
  const isMobile = useMediaQuery({ query: "(max-width: 959px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img src={Coracao} alt="Coração do título" className="h-14" />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Saúde do Cidadão
          </h1>
        </div>

        {isMobile && (
          <div className="absolute top-1/2 sm:bottom-24 w-full lg:w-3/4 px-8 md:px-20">
            <Slider {...settings}>
              <Link to="/saude-do-cidadao/especialidades-hospitalares">
                <div className="!flex flex-col items-center justify-center gap-1 px-1 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 w-3/4">
                    <img src={Especialidades} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Especialidades Hospitalares
                  </span>
                </div>
              </Link>
              {/* <Link
                to="https://pecidadao.pe.gov.br/#/orgaos/74"
                target="_blank"
              >
                <div className="!flex flex-col items-center justify-center gap-1 px-1 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-5 w-3/4">
                    <img src={BuscaPorSaude} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Busca por saúde
                  </span>
                </div>
              </Link> */}
              {/* <Link
                to="https://app.powerbi.com/view?r=eyJrIjoiOGU0OTNiM2ItMjNiNi00YTAxLWJmMzAtYTU2MTNjZDVjYmIwIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9"
                target="_blank"
              >
                <div className="!flex flex-col items-center justify-center gap-1 px-1 md:px-6">
                  <div className="bg-white rounded-full p-3 sm:p-7 w-3/4">
                    <img src={Paineis} alt="" className="w-full" />
                  </div>
                  <span className="text-center font-semibold text-xs md:text-sm text-[#0C2856] mb-5">
                    Estoque de Farmácias
                  </span>
                </div>
              </Link> */}
            </Slider>
          </div>
        )}
        
        <div className="hidden lg:flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          <Link to="/saude-do-cidadao/especialidades-hospitalares">
            <motion.div
              className="w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-3 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-4">
                <img src={Especialidades} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Especialidades Hospitalares
              </span>
            </motion.div>
          </Link>
          {/* <Link to="https://pecidadao.pe.gov.br/#/orgaos/74">
            <motion.div
              className="h-40 w-60 lg:h-60 lg:w-80 flex flex-col items-center justify-center gap-3 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7">
                <img src={BuscaPorSaude} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Busca por Saúde
              </span>
            </motion.div>
          </Link> */}
          {/* <Link to="https://app.powerbi.com/view?r=eyJrIjoiOGU0OTNiM2ItMjNiNi00YTAxLWJmMzAtYTU2MTNjZDVjYmIwIiwidCI6ImQ1ZTU0MGZmLTkzNzAtNGNhMi04YmVmLWQwMzcyMWQxM2MwNSJ9">
            <motion.div
              className="h-40 w-60 lg:h-60 lg:w-80 flex flex-col items-center justify-center gap-3 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7">
                <img src={Paineis} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Estoque de Farmácias
              </span>
            </motion.div>
          </Link> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
