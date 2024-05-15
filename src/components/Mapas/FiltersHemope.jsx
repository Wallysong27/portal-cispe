import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import dataMapHemope from "../../data/mapas/mapaHemope.json";

const FiltersHemope = ({
  onMacroHemopeChange,
  onGeresHemopeChange,
  onMunicipioHemopeChange,
  onHemopeChange,
  onResetHemopeFilters,
  onFilterHemopeChange,
}) => {
  const [selectedMacroHemope, setSelectedMacroHemope] = useState(null);
  const [selectedGeresHemope, setSelectedGeresHemope] = useState(null);
  const [selectedMunicipioHemope, setSelectedMunicipioHemope] = useState(null);
  const [selectedHemope, setSelectedHemope] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  const nomeMacrosHemope = Array.from(
    new Set(dataMapHemope.map((hemope) => hemope.macro))
  ).sort();

  const nomeGeresHemope = Array.from(
    new Set(
        dataMapHemope
        .filter(
          (hemope) =>
            !selectedMacroHemope || hemope.macro === selectedMacroHemope
        )
        .map((hemope) => hemope.geres)
    )
  ).sort();

  const nomeMunicipiosHemope = Array.from(
    new Set(
        dataMapHemope
        .filter(
          (hemope) =>
            (!selectedMacroHemope || hemope.macro === selectedMacroHemope) &&
            (!selectedGeresHemope || hemope.geres === selectedGeresHemope)
        )
        .map((hemope) => hemope.municipio)
    )
  ).sort();

  const nomeHemope = Array.from(
    new Set(
        dataMapHemope
        .filter(
          (hemope) =>
            (!selectedMacroHemope || hemope.macro === selectedMacroHemope) &&
            (!selectedGeresHemope || hemope.geres === selectedGeresHemope) &&
            (!selectedMunicipioHemope ||
              hemope.municipio === selectedMunicipioHemope)
        )
        .map((hemope) => hemope.hemocentro)
    )
  ).sort();

  const handleMacroHemopeFilterChange = (value) => {
    const selectedMacroHemope = nomeMacrosHemope[value - 1];
    onMacroHemopeChange(selectedMacroHemope);
    setSelectedMacroHemope(selectedMacroHemope);
    setSelectedGeresHemope(null);
    setSelectedMunicipioHemope(null);
    onFilterHemopeChange({
      selectedMacroHemope,
      selectedGeresHemope: null,
      selectedMunicipioHemope: null,
      selectedHemope: null,
    });
  };

  const handleGeresHemopeFilterChange = (value) => {
    const selectedGeresHemope = nomeGeresHemope[value - 1];
    onGeresHemopeChange(selectedGeresHemope);
    setSelectedGeresHemope(selectedGeresHemope);
    setSelectedMunicipioHemope(null);
    onFilterHemopeChange({
      selectedMacroHemope,
      selectedGeresHemope,
      selectedMunicipioHemope: null,
      selectedHemope: null,
    });
  };

  const handleMunicipioHemopeFilterChange = (value) => {
    const selectedMunicipioHemope = nomeMunicipiosHemope[value - 1];
    onMunicipioHemopeChange(selectedMunicipioHemope);
    setSelectedMunicipioHemope(selectedMunicipioHemope);
    onFilterHemopeChange({
      selectedMacroHemope,
      selectedGeresHemope,
      selectedMunicipioHemope,
      selectedHemope: null,
    });
  };

  const handleHemopeFilterChange = (value) => {
    const selectedHemope = nomeHemope[value - 1];
    onHemopeChange(selectedHemope);
    setSelectedHemope(selectedHemope);
    onFilterHemopeChange({
      selectedMacroHemope,
      selectedGeresHemope,
      selectedMunicipioHemope,
      selectedHemope,
    });
  };

  const handleResetFilters = () => {
    setSelectedMacroHemope(null);
    setSelectedGeresHemope(null);
    setSelectedMunicipioHemope(null);
    setSelectedHemope(null);
    setResetKey((prevKey) => prevKey + 1);
    onResetHemopeFilters && onResetHemopeFilters(setResetKey);
    onFilterHemopeChange &&
      onFilterHemopeChange({
        selectedMacroHemope: null,
        selectedGeresHemope: null,
        selectedMunicipioHemope: null,
        selectedHemope: null,
      });
  };
  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-2 gap-3 mb-5">
        <Select
          color="blue"
          label="Macro"
          key={`macro-select-${resetKey}`}
          onChange={(value) => handleMacroHemopeFilterChange(value)}
        >
          {nomeMacrosHemope.map((macroHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {macroHemope}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Geres"
          key={`geres-select-${resetKey}`}
          onChange={(value) => handleGeresHemopeFilterChange(value)}
        >
          {nomeGeresHemope.map((geresHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {geresHemope}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Município"
          key={`municipio-select-${resetKey}`}
          onChange={(value) => handleMunicipioHemopeFilterChange(value)}
        >
          {nomeMunicipiosHemope.map((municipioHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {municipioHemope}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Hemope"
          key={`nome-select-${resetKey}`}
          onChange={(value) => handleHemopeFilterChange(value)}
        >
          {nomeHemope.map((nomeHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {nomeHemope}
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

export default FiltersHemope;
