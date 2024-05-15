// IMPORTAÇÕES DO MOTION, REACT-ROUTER-DOM SLIDER E IMAGENS USADAS NA APLICAÇÃO
import { motion } from "framer-motion";

import VigilanciaEmSaudeImg from "../../assets/img/home/vigilancia-em-saude.png";
import Zoonoses from "../../assets/img/zoonoses/zoonoses.png";
import { Link } from "react-router-dom";

export default function VigilanciaEmSaude() {
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

        <div className="flex items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter py-6">
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
        </div>
      </div>
    </>
  );
}
