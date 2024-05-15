// IMPORTAÇÕES DO MOTION E IMAGENS UTILIZADAS
import { motion } from "framer-motion";

import Paineis from "../../assets/img/saudeCidadao/paineis.png";
import Especialidades from "../../assets/img/saudeCidadao/especialidades.png";
import Coracao from "../../assets/img/saudeCidadao/coracao.png";

export default function SaudeDaPopulacao() {
  // FRAGMENT ENGLOBANDO TODO O CÓDIGO
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        {/* DIV DO TÍTULO DO COMPONENTE DE SAÚDE DO CIDADÃO */}
        <div className="absolute top-40 flex flex-row items-center justify-center gap-1 sm:gap-5">
          <img src={Coracao} alt="Coração do título" className="h-14" />
          <h1 className="text-2xl sm:text-5xl font-semibold text-[#0C2856]">
            Saúde do Cidadão
          </h1>
        </div>

        <div className="flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
          {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
          <motion.div
            className="w-60 h-60 lg:w-80 flex flex-col items-center justify-center gap-1 cursor-pointer"
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
          {/* DIV FEITA COM MOTION PARA INSERIR EFEITOS À MESMA */}
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
        </div>
      </div>
    </>
  );
}
