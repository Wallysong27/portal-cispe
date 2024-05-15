import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import iconUnidade from "../../assets/img/servicos/mapas/icon-unidade.png";
import iconFarmacia from "../../assets/img/servicos/mapas/icon-farmacia.png";
import iconHemope from "../../assets/img/servicos/mapas/icon-hemope.png";
import iconGeres from "../../assets/img/servicos/mapas/icon-geres.png";

import FiltersUnidades from "../../components/Mapas/FiltersUnidades";
import FiltersFarmacias from "../../components/Mapas/FiltersFarmacias";
import FiltersHemope from "../../components/Mapas/FiltersHemope";
import FiltersGeres from "../../components/Mapas/FiltersGeres";
import FiltersSaudeDigital from "../../components/Mapas/FiltersSaudeDigital";

import dataMapUnid from "../../data/mapas/mapaUnidade.json";
import dataMapFarm from "../../data/mapas/mapaFarmacia.json";
import dataMapHemope from "../../data/mapas/mapaHemope.json";
import dataMapGeres from "../../data/mapas/mapaGeres.json";
import dataMapSaudeDigital from "../../data/mapas/mapaSaudeDigital.json";

// import Footer from "../../Footer/Footer";
// import Navbar from "../../Navbar/Navbar";

const data = [
  { label: "Unidades", value: "unidades" },
  { label: "Farmácias", value: "farmacias" },
  { label: "Hemope", value: "hemope" },
  { label: "Geres", value: "geres" },
  { label: "Saúde Digital", value: "saude-digital" },
];

const colorData = [
  { id: "c641029b-fc01-4c81-b418-72f7f65065c9", cor: "#4E7492" },
  { id: "9b4ad0f9-e156-4658-94fa-253f2adc3b73", cor: "#4E7492" },
  { id: "b394a9a3-724b-47dd-9141-4c835406ceaa", cor: "#4E7492" },
  { id: "208e7565-c07d-406d-9d51-8d980e63ddac", cor: "#4E7492" },
  { id: "d5e19a03-9614-45e2-8dc0-6ed6b372f45b", cor: "#59877C" },
  { id: "80546997-ef85-40f6-a555-a05dc3e69e41", cor: "#59877C" },
  { id: "4fd98bd1-6dc9-4fb9-8fa7-1cf4e0d61973", cor: "#B39661" },
  { id: "eff61176-161f-42cb-87f9-9577f4a43a3f", cor: "#B39661" },
  { id: "8f238adc-d9e8-4292-881d-340c40dbf259", cor: "#B39661" },
  { id: "b4bc236c-0b0a-4244-9936-9a60e13bfeaa", cor: "#89676B" },
  { id: "e0fa97c2-b1e5-457b-bf5f-3339c5bf0f5c", cor: "#89676B" },
  { id: "1fa31201-d8ef-4a9f-a79b-ef61b0c033fb", cor: "#89676B" },
];

const getFillColor = (feature) => {
  const match = colorData.find((item) => item.id === feature.id);
  return match ? match.cor : "#CCCCCC";
};

export default function Maps() {
  const [activeTab, setActiveTab] = useState("unidades");
  const [geoJSON, setGeoJSON] = useState(null);
  const [filterVisible, setFilterVisible] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.maptiler.com/data/59b1b7d6-8572-4321-8f80-c1cc1cdde025/features.json?key=64YQtY2adsA57zmNMQYd"
      )
      .then((response) => setGeoJSON(response.data))
      .catch((error) => console.error("Erro ao obter o GeoJSON:", error));
  }, []);

  const handleTabChange = (value) => {
    setFilterVisible(false);
    setTimeout(() => {
      setActiveTab(value);
      setFilterVisible(true);
    }, 300);
  };

  // ESTADOS NECESSÁRIOS PARA O MAPA DAS UNIDADES
  const [selectedTipoGestaoUnidade, setSelectedTipoGestaoUnidade] =
    useState(null);
  const [selectedTipoUnidade, setSelectedTipoUnidade] = useState(null);
  const [selectedMacroUnidade, setSelectedMacroUnidade] = useState(null);
  const [selectedGeresUnidade, setSelectedGeresUnidade] = useState(null);
  const [selectedMunicipioUnidade, setSelectedMunicipioUnidade] =
    useState(null);
  const [selectedUnidade, setSelectedUnidade] = useState(null);

  // ESTADOS NECESSÁRIOS PARA O MAPA DAS FARMÁCIAS
  const [selectedMacroFarm, setSelectedMacroFarm] = useState(null);
  const [selectedGeresFarm, setSelectedGeresFarm] = useState(null);
  const [selectedMunicipioFarm, setSelectedMunicipioFarm] = useState(null);
  const [selectedFarmacia, setSelectedFarmacia] = useState(null);

  // ESTADOS NECESSÁRIOS PARA O MAPA DOS HEMOPES
  const [selectedMacroHemope, setSelectedMacroHemope] = useState(null);
  const [selectedGeresHemope, setSelectedGeresHemope] = useState(null);
  const [selectedMunicipioHemope, setSelectedMunicipioHemope] = useState(null);
  const [selectedHemope, setSelectedHemope] = useState(null);

  // ESTADOS NECESSÁRIOS PARA O MAPA DAS GERES
  const [selectedMacroGeres, setSelectedMacroGeres] = useState(null);
  const [selectedGeresGeres, setSelectedGeresGeres] = useState(null);
  const [selectedMunicipioGeres, setSelectedMunicipioGeres] = useState(null);
  const [selectedGeres, setSelectedGeres] = useState(null);

  // ESTADOS NECESSÁRIOS PARA O MAPA DE SAÚDE DIGITAL
  const [selectedTipoAcaoSaudeDigital, setSelectedTipoAcaoSaudeDigital] =
    useState(null);
  const [selectedMacroSaudeDigital, setSelectedMacroSaudeDigital] =
    useState(null);
  const [selectedGeresSaudeDigital, setSelectedGeresSaudeDigital] =
    useState(null);
  const [selectedMunicipioSaudeDigital, setSelectedMunicipioSaudeDigital] =
    useState(null);
  const [selectedTipoUnidadeSaudeDigital, setSelectedTipoUnidadeSaudeDigital] =
    useState(null);
  const [selectedNomeUnidadeSaudeDigital, setSelectedNomeUnidadeSaudeDigital] =
    useState(null);

  // FUNÇÃO PARA RESTAR OS FILTROS DOS MAPAS
  const handleResetFilters = () => {
    // UNIDADES
    setSelectedTipoGestaoUnidade(null);
    setSelectedTipoUnidade(null);
    setSelectedMacroUnidade(null);
    setSelectedGeresUnidade(null);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    // FARMÁCIAS
    setSelectedMacroFarm(null);
    setSelectedGeresFarm(null);
    setSelectedMunicipioFarm(null);
    setSelectedFarmacia(null);
    // HEMOPE
    setSelectedMacroHemope(null);
    setSelectedGeresHemope(null);
    setSelectedMunicipioHemope(null);
    setSelectedHemope(null);
    // GERES
    setSelectedMacroGeres(null);
    setSelectedGeresGeres(null);
    setSelectedMunicipioGeres(null);
    setSelectedGeres(null);
    // SAÚDE DIGITAL
    setSelectedTipoAcaoSaudeDigital(null);
    setSelectedMacroSaudeDigital(null);
    setSelectedGeresSaudeDigital(null);
    setSelectedMunicipioSaudeDigital(null);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
  };

  // FUNÇÃO PARA TROCAR OS FILTROS PARA UNIDADES
  const handleFilterUnidadeChange = ({
    selectedTipoGestaoUnidade,
    selectedTipoUnidade,
    selectedMacroUnidade,
    selectedGeresUnidade,
    selectedMunicipioUnidade,
    selectedUnidade,
  }) => {
    setSelectedTipoGestaoUnidade(selectedTipoGestaoUnidade);
    setSelectedTipoUnidade(selectedTipoUnidade);
    setSelectedMacroUnidade(selectedMacroUnidade);
    setSelectedGeresUnidade(selectedGeresUnidade);
    setSelectedMunicipioUnidade(selectedMunicipioUnidade);
    setSelectedUnidade(selectedUnidade);
  };

  // FUNÇÃO PARA TROCAR OS FILTROS PARA FARMÁCIA
  const handleFilterFarmChange = ({
    selectedMacroFarm,
    selectedGeresFarm,
    selectedMunicipioFarm,
    selectedFarmacia,
  }) => {
    setSelectedMacroFarm(selectedMacroFarm);
    setSelectedGeresFarm(selectedGeresFarm);
    setSelectedMunicipioFarm(selectedMunicipioFarm);
    setSelectedFarmacia(selectedFarmacia);
  };

  // FUNÇÃO PARA TROCAR OS FILTROS PARA HEMOPE
  const handleFilterHemopeChange = ({
    selectedMacroHemope,
    selectedGeresHemope,
    selectedMunicipioHemope,
    selectedHemope,
  }) => {
    setSelectedMacroHemope(selectedMacroHemope);
    setSelectedGeresHemope(selectedGeresHemope);
    setSelectedMunicipioHemope(selectedMunicipioHemope);
    setSelectedHemope(selectedHemope);
  };

  // FUNÇÃO PARA TROCAR OS FILTROS PARA GERES
  const handleFilterGeresChange = ({
    selectedMacroGeres,
    selectedGeresGeres,
    selectedMunicipioGeres,
    selectedGeres,
  }) => {
    setSelectedMacroGeres(selectedMacroGeres);
    setSelectedGeresGeres(selectedGeresGeres);
    setSelectedMunicipioGeres(selectedMunicipioGeres);
    setSelectedGeres(selectedGeres);
  };

  // FUNÇÃO PARA TROCAR OS FILTROS PARA SAÚDE DIGITAL
  const handleFilterSaudeDigitalChange = ({
    selectedTipoAcaoSaudeDigital,
    selectedMacroSaudeDigital,
    selectedGeresSaudeDigital,
    selectedMunicipioSaudeDigital,
    selectedTipoUnidadeSaudeDigital,
    selectedNomeUnidadeSaudeDigital,
  }) => {
    setSelectedTipoAcaoSaudeDigital(selectedTipoAcaoSaudeDigital);
    setSelectedMacroSaudeDigital(selectedMacroSaudeDigital);
    setSelectedGeresSaudeDigital(selectedGeresSaudeDigital);
    setSelectedMunicipioSaudeDigital(selectedMunicipioSaudeDigital);
    setSelectedTipoUnidadeSaudeDigital(selectedTipoUnidadeSaudeDigital);
    setSelectedNomeUnidadeSaudeDigital(selectedNomeUnidadeSaudeDigital);
  };

  // FILTRAR O MAPA DAS UNIDADES
  const filterUnidades = (unidade) => {
    return (
      (!selectedTipoGestaoUnidade ||
        unidade.tipoGestao === selectedTipoGestaoUnidade) &&
      (!selectedTipoUnidade || unidade.tipoUnidade === selectedTipoUnidade) &&
      (!selectedMacroUnidade || unidade.macro === selectedMacroUnidade) &&
      (!selectedGeresUnidade || unidade.geres === selectedGeresUnidade) &&
      (!selectedMunicipioUnidade ||
        unidade.municipio === selectedMunicipioUnidade) &&
      (!selectedUnidade || unidade.unidade === selectedUnidade)
    );
  };

  // FILTRAR O MAPA DAS FARMÁCIAS
  const filterFarmacias = (farmacia) => {
    return (
      (!selectedMacroFarm || farmacia.macro === selectedMacroFarm) &&
      (!selectedGeresFarm || farmacia.geres === selectedGeresFarm) &&
      (!selectedMunicipioFarm ||
        farmacia.municipio === selectedMunicipioFarm) &&
      (!selectedFarmacia || farmacia.farmacia === selectedFarmacia)
    );
  };

  // FILTRAR O MAPA DOS HEMOPES
  const filterHemope = (hemope) => {
    return (
      (!selectedMacroHemope || hemope.macro === selectedMacroHemope) &&
      (!selectedGeresHemope || hemope.geres === selectedGeresHemope) &&
      (!selectedMunicipioHemope ||
        hemope.municipio === selectedMunicipioHemope) &&
      (!selectedHemope || hemope.hemocentro === selectedHemope)
    );
  };

  // FILTRAR O MAPA DAS GERES
  const filterGeres = (geres) => {
    return (
      (!selectedMacroGeres || geres.macro === selectedMacroGeres) &&
      (!selectedGeresGeres || geres.geres === selectedGeresGeres)
    );
  };

  // FILTRAR O MAPA DE SAÚDE DIGITAL
  const filterSaudeDigital = (saudeDigital) => {
    return (
      (!selectedTipoAcaoSaudeDigital ||
        [
          saudeDigital.tipoAcao1,
          saudeDigital.tipoAcao2,
          saudeDigital.tipoAcao3,
          saudeDigital.tipoAcao4,
        ].includes(selectedTipoAcaoSaudeDigital)) &&
      (!selectedMacroSaudeDigital ||
        saudeDigital.macro === selectedMacroSaudeDigital) &&
      (!selectedGeresSaudeDigital ||
        saudeDigital.geres === selectedGeresSaudeDigital) &&
      (!selectedMunicipioSaudeDigital ||
        saudeDigital.municipio === selectedMunicipioSaudeDigital) &&
      (!selectedTipoUnidadeSaudeDigital ||
        saudeDigital.tipoUnidade === selectedTipoUnidadeSaudeDigital) &&
      (!selectedNomeUnidadeSaudeDigital ||
        saudeDigital.nomeUnidade === selectedNomeUnidadeSaudeDigital)
    );
  };

  const renderFilters = (value) => {
    switch (value) {
      case "unidades":
        return (
          <FiltersUnidades
            onTipoGestaoUnidadeChange={setSelectedTipoGestaoUnidade}
            onTipoUnidadeChange={setSelectedTipoUnidade}
            onMacroUnidadeChange={setSelectedMacroUnidade}
            onGeresUnidadeChange={setSelectedGeresUnidade}
            onMunicipioUnidadeChange={setSelectedMunicipioUnidade}
            onUnidadeChange={setSelectedUnidade}
            onResetUnidadeFilters={handleResetFilters}
            onFilterUnidadeChange={handleFilterUnidadeChange}
          />
        );
      case "farmacias":
        return (
          <FiltersFarmacias
            onMacroFarmChange={setSelectedMacroFarm}
            onGeresFarmChange={setSelectedGeresFarm}
            onMunicipioFarmChange={setSelectedMunicipioFarm}
            onFarmaciaChange={setSelectedFarmacia}
            onResetFarmFilters={handleResetFilters}
            onFilterFarmChange={handleFilterFarmChange}
          />
        );
      case "hemope":
        return (
          <FiltersHemope
            onMacroHemopeChange={setSelectedMacroHemope}
            onGeresHemopeChange={setSelectedGeresHemope}
            onMunicipioHemopeChange={setSelectedMunicipioHemope}
            onHemopeChange={setSelectedHemope}
            onResetHemopeFilters={handleResetFilters}
            onFilterHemopeChange={handleFilterHemopeChange}
          />
        );
      case "geres":
        return (
          <FiltersGeres
            onMacroGeresChange={setSelectedMacroGeres}
            onGeresGeresChange={setSelectedGeresGeres}
            onMunicipioGeresChange={setSelectedMunicipioGeres}
            onGeresChange={setSelectedGeres}
            onResetGeresFilters={handleResetFilters}
            onFilterGeresChange={handleFilterGeresChange}
          />
        );
      case "saude-digital":
        return (
          <FiltersSaudeDigital
            onTipoAcaoSaudeDigitalChange={setSelectedTipoAcaoSaudeDigital}
            onMacroSaudeDigitalChange={setSelectedMacroSaudeDigital}
            onGeresSaudeDigitalChange={setSelectedGeresSaudeDigital}
            onMunicipioSaudeDigitalChange={setSelectedMunicipioSaudeDigital}
            onTipoUnidadeSaudeDigitalChange={setSelectedTipoUnidadeSaudeDigital}
            onNomeUnidadeSaudeDigitalChange={setSelectedNomeUnidadeSaudeDigital}
            onResetSaudeDigitalFilters={handleResetFilters}
            onFilterSaudeDigitalChange={handleFilterSaudeDigitalChange}
          />
        );
      default:
        return null;
    }
  };

  const renderMarkers = (data, icon) => (
    <MarkerClusterGroup>
      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={L.icon({
            iconUrl: icon,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          })}
        >
          <Popup>
            {/* UNIDADES */}
            {item.unidade && (
              <p>
                <strong>Nome da Unidade: </strong>
                {item.unidade}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>Tipo de Gestão: </strong>
                {item.tipoGestao}
              </p>
            )}
            {item.unidade && item.detalhamentoGestao && (
              <p>
                <strong>Detalhamento da Gestão: </strong>
                {item.detalhamentoGestao}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>Tipo de Unidade: </strong>
                {item.tipoUnidade}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>Macro: </strong>
                {item.macro}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>Geres: </strong>
                {item.geres}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>RD: </strong>
                {item.rd}
              </p>
            )}
            {item.unidade && (
              <p>
                <strong>Endereço: </strong>
                {item.endereco}
              </p>
            )}
            {/* FARMÁCIAS */}
            {item.farmacia && (
              <p>
                <strong>Nome da Farmácia: </strong>
                {item.farmacia}
              </p>
            )}
            {item.farmacia && (
              <p>
                <strong>Macro: </strong>
                {item.macro}
              </p>
            )}
            {item.farmacia && (
              <p>
                <strong>Geres: </strong>
                {item.geres}
              </p>
            )}
            {item.farmacia && (
              <p>
                <strong>RD: </strong>
                {item.rd}
              </p>
            )}
            {item.farmacia && (
              <p>
                <strong>Endereço: </strong>
                {item.endereco}
              </p>
            )}
            {/* HEMOCENTRO */}
            {item.hemocentro && (
              <p>
                <strong>Nome do Hemocentro: </strong>
                {item.hemocentro}
              </p>
            )}
            {item.hemocentro && (
              <p>
                <strong>Macro: </strong>
                {item.macro}
              </p>
            )}
            {item.hemocentro && (
              <p>
                <strong>Geres: </strong>
                {item.geres}
              </p>
            )}
            {item.hemocentro && (
              <p>
                <strong>RD: </strong>
                {item.rd}
              </p>
            )}
            {item.hemocentro && (
              <p>
                <strong>Endereço: </strong>
                {item.endereco}
              </p>
            )}
            {/* GERES */}
            {item.nomeGeres && (
              <p>
                <strong>Nome do Geres: </strong>
                {item.nomeGeres}
              </p>
            )}
            {item.nomeGeres && (
              <p>
                <strong>Gerente: </strong>
                {item.gerente}
              </p>
            )}
            {item.nomeGeres && (
              <p>
                <strong>Endereço: </strong>
                {item.endereco}
              </p>
            )}
            {item.nomeGeres && (
              <p>
                <strong>Telefone: </strong>
                {item.fone}
              </p>
            )}
            {item.nomeGeres && (
              <p>
                <strong>Celular: </strong>
                {item.celular}
              </p>
            )}
            {/* SAÚDE DIGITAL */}
            {item.nomeUnidade && (
              <p>
                <strong>Macro: </strong>
                {item.macro}
              </p>
            )}
            {item.nomeUnidade && (
              <p>
                <strong>Geres: </strong>
                {item.geres}
              </p>
            )}
            {item.nomeUnidade && (
              <p>
                <strong>Tipo(s) de Ação: </strong>
                <ul>
                  {Object.keys(item).map((key) => {
                    if (key.startsWith("tipoAcao")) {
                      return <li key={key}>{item[key]}</li>;
                    }
                    return null;
                  })}
                </ul>
              </p>
            )}
            {item.nomeUnidade && (
              <p>
                <strong>Municícpio: </strong>
                {item.municipio}
              </p>
            )}
            {item.nomeUnidade && (
              <p>
                <strong>Nome da unidade: </strong>
                {item.nomeUnidade}
              </p>
            )}
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="pt-40 pb-20">
          {/* <div className="px-6 md:px-16 lg:px-32 xl:px-40">
            <h4 className="text-4xl font-bold text-[#0C2856] mb-5">Mapas</h4>
          </div> */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 px-6 md:px-16 lg:px-32 xl:px-40">
              <div className="grid grid-cols-2 gap-2 lg:gap-0 lg:flex items-center justify-center overflow-x-auto text-xs sm:text-base">
                {data.map(({ label, value }) => (
                  <button
                    key={value}
                    className={`lg:px-2 xl:px-4 py-2 rounded-lg mr-0 lg:mr-4 focus:outline-none ${
                      activeTab === value
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleTabChange(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div
                className={`transition-opacity ${
                  filterVisible ? "opacity-100" : "opacity-0"
                } z-[2000] xl:h-auto bg-white backdrop-blur-sm backdrop-filter p-10 rounded-xl`}
              >
                {(activeTab === "unidades" && renderFilters(activeTab)) ||
                  (activeTab === "farmacias" && renderFilters(activeTab)) ||
                  (activeTab === "hemope" && renderFilters(activeTab)) ||
                  (activeTab === "geres" && renderFilters(activeTab)) ||
                  (activeTab === "saude-digital" && renderFilters(activeTab))}
              </div>
            </div>
            <div className="px-6 md:px-16 lg:px-32 xl:px-40 mt-20 py-10">
              <MapContainer
                center={[-8.5137173, -37.964107]}
                zoom={8}
                style={{ height: "650px", borderRadius: "20px", width: "100%" }}
                maxZoom={20}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {geoJSON && (
                  <GeoJSON
                    key={JSON.stringify(geoJSON)}
                    data={geoJSON}
                    style={(feature) => ({
                      fillColor: getFillColor(feature),
                      weight: 1,
                      opacity: 1,
                      color: "black",
                      fillOpacity: 0.7,
                    })}
                  />
                )}
                {activeTab === "unidades" &&
                  renderMarkers(
                    dataMapUnid.filter(filterUnidades),
                    iconUnidade
                  )}
                {activeTab === "farmacias" &&
                  renderMarkers(
                    dataMapFarm.filter(filterFarmacias),
                    iconFarmacia
                  )}
                {activeTab === "hemope" &&
                  renderMarkers(dataMapHemope.filter(filterHemope), iconHemope)}
                {activeTab === "geres" &&
                  renderMarkers(dataMapGeres.filter(filterGeres), iconGeres)}
                {activeTab === "saude-digital" &&
                  renderMarkers(
                    dataMapSaudeDigital.filter(filterSaudeDigital),
                    iconUnidade
                  )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
