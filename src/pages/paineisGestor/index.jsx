import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { filtros } from "../../data/filtrosPaineisGestor/filtrosPaineisGestor";
import Gabinete from "../../components/ModuloGestor/Gabinete";
import Segecg from "../../components/ModuloGestor/Segecg";
import Seaf from "../../components/ModuloGestor/Seaf";
import Sers from "../../components/ModuloGestor/Sers";
import Segtes from "../../components/ModuloGestor/Segtes";
import Sevsap from "../../components/ModuloGestor/Sevsap";
import Seas from "../../components/ModuloGestor/Seas";

export default function PaineisGestor() {
  const [activeTab, setActiveTab] = useState("gabinete");
  const isMobile = useMediaQuery({ query: "(max-width: 1320px)" });

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center w-full gap-10 pt-40 pb-20 min-h-screen">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-semibold text-[#0C2856]">
            Painéis de Monitoramento
          </h1>
        </div>

        <div className="flex flex-wrap gap-5 items-center justify-evenly w-full bg-gray-400 backdrop-blur-sm backdrop-filter p-6">
          {filtros.map(({ label, value }) => (
            <button
              key={value}
              className={`lg:px-2 xl:px-4 py-2 rounded-lg mr-0 lg:mr-4 focus:outline-none w-[150px] font-bold ${
                activeTab === value
                  ? "bg-[#0C2856] text-white"
                  : "bg-gray-200 text-[#0C2856]"
              }`}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          ))}
        </div>
        {isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[#0C2856]">
            {activeTab === "gabinete" && <Gabinete />}
            {activeTab === "segecg" && <Segecg />}
            {activeTab === "seaf" && <Seaf />}
            {activeTab === "seas" && <Seas />}
            {activeTab === "sers" && <Sers />}
            {activeTab === "segtes" && <Segtes />}
            {activeTab === "sevsap" && <Sevsap />}
          </div>
        )}
        <div className="hidden 2xl:grid grid-cols-4 gap-10 text-[#0C2856]">
          {activeTab === "gabinete" && <Gabinete />}
          {activeTab === "segecg" && <Segecg />}
          {activeTab === "seaf" && <Seaf />}
          {activeTab === "seas" && <Seas />}
          {activeTab === "sers" && <Sers />}
          {activeTab === "segtes" && <Segtes />}
          {activeTab === "sevsap" && <Sevsap />}
        </div>
        <Footer />
      </div>
    </>
  );
}
