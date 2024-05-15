import { useState } from "react";
import { Button, Select } from "@material-tailwind/react";
import dataMapGeres from "../../data/mapas/mapaGeres.json";

const FiltersGeres = ({
  onMacroGeresChange,
  onGeresGeresChange,
  onResetGeresFilters,
  onFilterGeresChange,
}) => {
  const [selectedMacroGeres, setSelectedMacroGeres] = useState(null);
  const [selectedGeresGeres, setSelectedGeresGeres] = useState(null);
  const [selectedGeres, setSelectedGeres] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  const nomeMacrosGeres = Array.from(
    new Set(dataMapGeres.map((geres) => geres.macro))
  ).sort();

  const nomeGeresGeres = Array.from(
    new Set(
        dataMapGeres
        .filter(
          (geres) => !selectedMacroGeres || geres.macro === selectedMacroGeres
        )
        .map((geres) => geres.geres)
    )
  ).sort();

  const handleMacroGeresFilterChange = (value) => {
    const selectedMacroGeres = nomeMacrosGeres[value - 1];
    onMacroGeresChange(selectedMacroGeres);
    setSelectedMacroGeres(selectedMacroGeres);
    setSelectedGeresGeres(null);
    onFilterGeresChange({
      selectedMacroGeres,
      selectedGeresGeres: null,
      selectedGeres: null,
    });
  };

  const handleGeresGeresFilterChange = (value) => {
    const selectedGeresGeres = nomeGeresGeres[value - 1];
    onGeresGeresChange(selectedGeresGeres);
    setSelectedGeresGeres(selectedGeresGeres);
    onFilterGeresChange({
      selectedMacroGeres,
      selectedGeresGeres,
      selectedGeres: null,
    });
  };

  const handleResetFilters = () => {
    setSelectedMacroGeres(null);
    setSelectedGeresGeres(null);
    setSelectedGeres(null);
    setResetKey((prevKey) => prevKey + 1);
    onResetGeresFilters && onResetGeresFilters(setResetKey);
    onFilterGeresChange &&
      onFilterGeresChange({
        selectedMacroGeres: null,
        selectedGeresGeres: null,
        selectedGeres: null,
      });
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-2 gap-3 mb-5">
        <Select
          color="blue"
          label="Macro"
          key={`macro-select-${resetKey}`}
          onChange={(value) => handleMacroGeresFilterChange(value)}
        >
          {nomeMacrosGeres.map((macroHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {macroHemope}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Geres"
          key={`geres-select-${resetKey}`}
          onChange={(value) => handleGeresGeresFilterChange(value)}
        >
          {nomeGeresGeres.map((geresHemope, index) => (
            <Select.Option key={index} value={index + 1}>
              {geresHemope}
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

export default FiltersGeres;
