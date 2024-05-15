// IMPORTAÇÕES DE HOOKS, FRAMER-MOTION, REACT-ROUTER-DOM E IMAGENS UTILIZADAS NO COMPONENTE NAVBAR
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ASSETS, ICONS AND IMAGES
import { TbMenuDeep } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import LogoDgmog from "../../assets/img/navbar/logoDgmog.png";
import LogoSesGov from "../../assets/img/navbar/logoSes.png";
import LogoCieges from "../../assets/img/navbar/logoConass.png";
// import LogoDgmogSesGov from "../../assets/img/navbar/logoDgmogSesGov.png";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Navbar() {
  // ESTADO INICIAL PARA E MEDIA QUERY PARA FAZER A TRANSIÇÃO ENTRE DESKTOP E MOBILE
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1399px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1400px)" });

  // FUNÇÃO PARA ALTERAR O ESTADO DO 'menuOpen'
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
  };

  // FRAGMENT QUE ENGLOBA TODO O CÓDIGO
  return (
    <>
      <nav>
        <div className="fixed w-full py-2 px-4 md:px-10 flex justify-between items-center gap-10 h-24 z-[10000] bg-white">
          {/* DISPOSIÇÃO DAS LOGOS EM TELAS MOBILE */}
          {isMobile && (
            <div className="h-full flex items-center justify-center gap-5">
              <Link
                to="https://portal.saude.pe.gov.br/"
                className="h-full flex items-center"
              >
                <img
                  src={LogoDgmog}
                  alt="Logo da Dgmog"
                  className="h-3/4 sm:h-full"
                />
              </Link>
              <Link
                to="https://portal.saude.pe.gov.br/"
                className="h-full flex items-center"
              >
                <img
                  src={LogoSesGov}
                  alt="Logo da SES e do Governo"
                  className="h-3/4 sm:h-full"
                />
              </Link>
            </div>
          )}
          {/* BOTÃO MENU PARA DISPOSITIVOS MOBILE */}
          {!isDesktop && (
            <button className="w-10 h-10" onClick={toggleMenu}>
              <TbMenuDeep className="w-full h-full text-[#0C2856]" />
            </button>
          )}
          {/* DISPOSIÇÃO DOS BOTÕES EM DESKTOP */}
          {isDesktop && (
            <div className="relative flex items-center justify-around h-24 w-full">
              <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 flex-1 h-full p-3">
                {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O SITE DA DGMOG */}
                <Link
                  to="https://dgmog.saude.pe.gov.br/"
                  className="cursor-pointer"
                >
                  <img src={LogoDgmog} alt="Logo da Dgmog" className="h-full" />
                </Link>
                {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O SITE DA SECRETARIA ESTADUAL DE SAÚDE */}
                <Link
                  to="https://portal.saude.pe.gov.br/"
                  className="cursor-pointer"
                >
                  <img
                    src={LogoSesGov}
                    alt="Logo da SES e do Governo"
                    className="h-full"
                  />
                </Link>
                {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O SUTE DO CIEGES */}
                <Link
                  to="https://cieges.conass.org.br/pagina-inicial"
                  className="cursor-pointer"
                >
                  <img
                    src={LogoCieges}
                    alt="Logo do Cieges"
                    className="h-full py-2"
                  />
                </Link>
              </div>
              <div className="flex-1 flex items-center justify-end h-full text-[#0C2856]">
                {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA HOME */}
                <Link
                  to="/"
                  className="font-bold hover:text-[#1F64FF] cursor-pointer"
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* TRECHO FEITO COM FRAMER-MOTION PARA DAR O EFEITO DE ABERTURA DO MENU */}
        <AnimatePresence>
          {(menuOpen || (isDesktop && menuOpen)) && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-full bg-black bg-opacity-75 z-[10000]"
              onClick={toggleMenu}
            >
              <div
                className="fixed top-0 bottom-0 right-0 bg-white w-11/12 shadow-lg rounded-l-2xl"
                onClick={handleMenuClick}
              >
                {/* BOTÃO PARA ABRIR O MENU EM DISPOSITIVOS MOBILE */}
                {!isDesktop && (
                  <button
                    className="absolute top-4 right-2 w-14 h-14"
                    onClick={toggleMenu}
                  >
                    <IoIosClose className="text-[#0C2856] w-full h-full" />
                  </button>
                )}
                {/* DISPOSIÇÃO DOS BOTÕES DO MENU EM DISPOSITIVOS MOBILE */}
                {!isDesktop && (
                  <ul className="absolute top-28 left-4 text-sm w-10/12 flex flex-col gap-3 text-[#0C2856]">
                    <span className="text-xs pb-4">Menu</span>
                    {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA A ROTA HOME */}
                    <Link to="/">
                      <li className="pb-2 font-bold">Home</li>
                    </Link>

                    <hr className="border-[#0C2856]"></hr>
                    {/* <Link> USADO PARA REDIRECIONAR A PÁGINA PARA O SITE DO CIEGES */}
                    <Link to="https://cieges.conass.org.br/pagina-inicial">
                      <li className="py-4">
                        <img src={LogoCieges} alt="" className="w-3/4" />
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
