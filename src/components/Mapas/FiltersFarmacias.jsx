import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import dataMapFarm from "../../data/mapas/mapaFarmacia.json";

const FiltersFarmacias = ({
  onMacroFarmChange,
  onGeresFarmChange,
  onMunicipioFarmChange,
  onFarmaciaChange,
  onResetFarmFilters,
  onFilterFarmChange,
}) => {
  const [selectedMacroFarm, setSelectedMacroFarm] = useState(null);
  const [selectedGeresFarm, setSelectedGeresFarm] = useState(null);
  const [selectedMunicipioFarm, setSelectedMunicipioFarm] = useState(null);
  const [selectedFarmacia, setSelectedFarmacia] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  const nomeMacrosFarm = Array.from(
    new Set(dataMapFarm.map((farmacia) => farmacia.macro))
  ).sort();

  const nomeGeresFarm = Array.from(
    new Set(
        dataMapFarm
        .filter(
          (farmacia) =>
            !selectedMacroFarm || farmacia.macro === selectedMacroFarm
        )
        .map((farmacia) => farmacia.geres)
    )
  ).sort();

  const nomeMunicipiosFarm = Array.from(
    new Set(
        dataMapFarm
        .filter(
          (farmacia) =>
            (!selectedMacroFarm || farmacia.macro === selectedMacroFarm) &&
            (!selectedGeresFarm || farmacia.geres === selectedGeresFarm)
        )
        .map((farmacia) => farmacia.municipio)
    )
  ).sort();

  const nomeFarmacias = Array.from(
    new Set(
        dataMapFarm
        .filter(
          (farmacia) =>
            (!selectedMacroFarm || farmacia.macro === selectedMacroFarm) &&
            (!selectedGeresFarm || farmacia.geres === selectedGeresFarm) &&
            (!selectedMunicipioFarm ||
              farmacia.municipio === selectedMunicipioFarm)
        )
        .map((farmacia) => farmacia.farmacia)
    )
  ).sort();

  const handleMacroFarmFilterChange = (value) => {
    const selectedMacroFarm = nomeMacrosFarm[value - 1];
    onMacroFarmChange(selectedMacroFarm);
    setSelectedMacroFarm(selectedMacroFarm);
    setSelectedGeresFarm(null);
    setSelectedMunicipioFarm(null);
    onFilterFarmChange({
      selectedMacroFarm,
      selectedGeresFarm: null,
      selectedMunicipioFarm: null,
      selectedFarmacia: null,
    });
  };

  const handleGeresFarmFilterChange = (value) => {
    const selectedGeresFarm = nomeGeresFarm[value - 1];
    onGeresFarmChange(selectedGeresFarm);
    setSelectedGeresFarm(selectedGeresFarm);
    setSelectedMunicipioFarm(null);
    onFilterFarmChange({
      selectedMacroFarm,
      selectedGeresFarm,
      selectedMunicipioFarm: null,
      selectedFarmacia: null,
    });
  };

  const handleMunicipioFarmFilterChange = (value) => {
    const selectedMunicipioFarm = nomeMunicipiosFarm[value - 1];
    onMunicipioFarmChange(selectedMunicipioFarm);
    setSelectedMunicipioFarm(selectedMunicipioFarm);
    onFilterFarmChange({
      selectedMacroFarm,
      selectedGeresFarm,
      selectedMunicipioFarm,
      selectedFarmacia: null,
    });
  };

  const handleFarmaciaFilterChange = (value) => {
    const selectedFarmacia = nomeFarmacias[value - 1];
    onFarmaciaChange(selectedFarmacia);
    setSelectedFarmacia(selectedFarmacia);
    onFilterFarmChange({
      selectedMacroFarm,
      selectedGeresFarm,
      selectedMunicipioFarm,
      selectedFarmacia,
    });
  };

  const handleResetFilters = () => {
    setSelectedMacroFarm(null);
    setSelectedGeresFarm(null);
    setSelectedMunicipioFarm(null);
    setSelectedFarmacia(null);
    setResetKey((prevKey) => prevKey + 1);
    onResetFarmFilters && onResetFarmFilters(setResetKey);
    onFilterFarmChange &&
      onFilterFarmChange({
        selectedMacroFarm: null,
        selectedGeresFarm: null,
        selectedMunicipioFarm: null,
        selectedFarmacia: null,
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-2 gap-3 mb-5">
        <Select
          color="blue"
          label="Macro"
          key={`macro-select-${resetKey}`}
          onChange={(value) => handleMacroFarmFilterChange(value)}
        >
          {nomeMacrosFarm.map((macroFarmacia, index) => (
            <Select.Option key={index} value={index + 1}>
              {macroFarmacia}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Geres"
          key={`geres-select-${resetKey}`}
          onChange={(value) => handleGeresFarmFilterChange(value)}
        >
          {nomeGeresFarm.map((geresFarmacia, index) => (
            <Select.Option key={index} value={index + 1}>
              {geresFarmacia}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Município"
          key={`municipio-select-${resetKey}`}
          onChange={(value) => handleMunicipioFarmFilterChange(value)}
        >
          {nomeMunicipiosFarm.map((municipioFarmacia, index) => (
            <Select.Option key={index} value={index + 1}>
              {municipioFarmacia}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Farmácias"
          key={`nome-select-${resetKey}`}
          onChange={(value) => handleFarmaciaFilterChange(value)}
        >
          {nomeFarmacias.map((nomeFarmacia, index) => (
            <Select.Option key={index} value={index + 1}>
              {nomeFarmacia}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div>
        <Button
          color="white"
          className="border-[1px] border-[#B0BEC5] shadow-none hover:shadow-none hover:scale-[1.01] ml-[1px]"
          onClick={handleResetFilters}
        >
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
};

export default FiltersFarmacias;
