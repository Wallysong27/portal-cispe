import { motion } from "framer-motion";

import Paineis from "../../assets/img/saudeCidadao/paineis.png";
import Coracao from "../../assets/img/saudeCidadao/coracao.png";
import { Link } from "react-router-dom";

export default function ModuloGestor() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img src={Coracao} alt="Coração do título" className="h-14" />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Módulo Gestor
          </h1>
        </div>

        <div className="flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          <Link to="/modulo-gestor/paineis">
            <motion.div
              className="h-40 w-60 lg:h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
            >
              <div className="bg-white h-20 w-20 md:h-40 md:w-40 rounded-full p-7">
                <img src={Paineis} alt="" />
              </div>
              <span className="font-semibold text-sm md:text-lg text-center text-[#0C2856] mb-5">
                Painéis de Monitoramento
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
