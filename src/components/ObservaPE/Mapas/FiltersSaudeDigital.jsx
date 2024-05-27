import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import dataMapSaudeDigital from "../../../data/mapas/mapaSaudeDigital.json";

const FiltersSaudeDigital = ({
  onTipoAcaoSaudeDigitalChange,
  onMacroSaudeDigitalChange,
  onGeresSaudeDigitalChange,
  onMunicipioSaudeDigitalChange,
  onTipoUnidadeSaudeDigitalChange,
  onNomeUnidadeSaudeDigitalChange,
  onResetSaudeDigitalFilters,
  onFilterSaudeDigitalChange,
}) => {
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
  const [resetKey, setResetKey] = useState(0);

  const nomeTipoAcaoSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital.flatMap((saudeDigital) => [
        saudeDigital.tipoAcao1,
        saudeDigital.tipoAcao2,
        saudeDigital.tipoAcao3,
        saudeDigital.tipoAcao4,
      ])
    )
  ).sort();

  const nomeMacrosSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital
        .filter((saudeDigital) =>
          selectedTipoAcaoSaudeDigital
            ? [
                saudeDigital.tipoAcao1,
                saudeDigital.tipoAcao2,
                saudeDigital.tipoAcao3,
                saudeDigital.tipoAcao4,
              ].includes(selectedTipoAcaoSaudeDigital)
            : true
        )
        .map((saudeDigital) => saudeDigital.macro)
    )
  );

  const nomeGeresSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital
        .filter(
          (saudeDigital) =>
            (!selectedTipoAcaoSaudeDigital ||
              [
                saudeDigital.tipoAcao1,
                saudeDigital.tipoAcao2,
                saudeDigital.tipoAcao3,
                saudeDigital.tipoAcao4,
              ].includes(selectedTipoAcaoSaudeDigital)) &&
            (!selectedMacroSaudeDigital ||
              saudeDigital.macro === selectedMacroSaudeDigital)
        )
        .map((saudeDigital) => saudeDigital.geres)
    )
  ).sort();

  const nomeMunicipiosSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital
        .filter(
          (saudeDigital) =>
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
              saudeDigital.geres === selectedGeresSaudeDigital)
        )
        .map((saudeDigital) => saudeDigital.municipio)
    )
  ).sort();

  const nomeTipoUnidadeSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital
        .filter(
          (saudeDigital) =>
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
              saudeDigital.municipio === selectedMunicipioSaudeDigital)
        )
        .map((saudeDigital) => saudeDigital.tipoUnidade)
    )
  ).sort();

  const nomeUnidadeSaudeDigital = Array.from(
    new Set(
      dataMapSaudeDigital
        .filter(
          (saudeDigital) =>
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
              saudeDigital.tipoUnidade === selectedTipoUnidadeSaudeDigital)
        )
        .map((saudeDigital) => saudeDigital.nomeUnidade)
    )
  ).sort();

  const handleTipoAcaoSaudeDigitalFilterChange = (value) => {
    const selectedTipoAcaoSaudeDigital = nomeTipoAcaoSaudeDigital[value - 1];
    onTipoAcaoSaudeDigitalChange(selectedTipoAcaoSaudeDigital);
    setSelectedTipoAcaoSaudeDigital(selectedTipoAcaoSaudeDigital);
    setSelectedMacroSaudeDigital(null);
    setSelectedGeresSaudeDigital(null);
    setSelectedMunicipioSaudeDigital(null);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital: null,
      selectedGeresSaudeDigital: null,
      selectedMunicipioSaudeDigital: null,
      selectedTipoUnidadeSaudeDigital: null,
      selectedNomeUnidadeSaudeDigital: null,
    });
  };

  const handleMacroSaudeDigitalFilterChange = (value) => {
    const selectedMacroSaudeDigital = nomeMacrosSaudeDigital[value - 1];
    onMacroSaudeDigitalChange(selectedMacroSaudeDigital);
    setSelectedMacroSaudeDigital(selectedMacroSaudeDigital);
    setSelectedGeresSaudeDigital(null);
    setSelectedMunicipioSaudeDigital(null);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital,
      selectedGeresSaudeDigital: null,
      selectedMunicipioSaudeDigital: null,
      selectedTipoUnidadeSaudeDigital: null,
      selectedNomeUnidadeSaudeDigital: null,
    });
  };

  const handleGeresSaudeDigitalFilterChange = (value) => {
    const selectedGeresSaudeDigital = nomeGeresSaudeDigital[value - 1];
    onGeresSaudeDigitalChange(selectedGeresSaudeDigital);
    setSelectedGeresSaudeDigital(selectedGeresSaudeDigital);
    setSelectedMunicipioSaudeDigital(null);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital,
      selectedGeresSaudeDigital,
      selectedMunicipioSaudeDigital: null,
      selectedTipoUnidadeSaudeDigital: null,
      selectedNomeUnidadeSaudeDigital: null,
    });
  };

  const handleMunicipioSaudeDigitalFilterChange = (value) => {
    const selectedMunicipioSaudeDigital = nomeMunicipiosSaudeDigital[value - 1];
    onMunicipioSaudeDigitalChange(selectedMunicipioSaudeDigital);
    setSelectedMunicipioSaudeDigital(selectedMunicipioSaudeDigital);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital,
      selectedGeresSaudeDigital,
      selectedMunicipioSaudeDigital,
      selectedTipoUnidadeSaudeDigital: null,
      selectedNomeUnidadeSaudeDigital: null,
    });
  };

  const hanldeTipoUnidadeSaudeDigitalFilterChange = (value) => {
    const selectedTipoUnidadeSaudeDigital =
      nomeTipoUnidadeSaudeDigital[value - 1];
    onTipoUnidadeSaudeDigitalChange(selectedTipoUnidadeSaudeDigital);
    setSelectedTipoUnidadeSaudeDigital(selectedTipoUnidadeSaudeDigital);
    setSelectedNomeUnidadeSaudeDigital(null);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital,
      selectedGeresSaudeDigital,
      selectedMunicipioSaudeDigital,
      selectedTipoUnidadeSaudeDigital,
      selectedNomeUnidadeSaudeDigital: null,
    });
  };

  const handleNomeUnidadeSaudeDigitalFilterChange = (value) => {
    const selectedNomeUnidadeSaudeDigital = nomeUnidadeSaudeDigital[value - 1];
    onNomeUnidadeSaudeDigitalChange(selectedNomeUnidadeSaudeDigital);
    setSelectedNomeUnidadeSaudeDigital(selectedNomeUnidadeSaudeDigital);
    onFilterSaudeDigitalChange({
      selectedTipoAcaoSaudeDigital,
      selectedMacroSaudeDigital,
      selectedGeresSaudeDigital,
      selectedMunicipioSaudeDigital,
      selectedTipoUnidadeSaudeDigital,
      selectedNomeUnidadeSaudeDigital,
    });
  };

  const handleResetFilters = () => {
    setSelectedTipoAcaoSaudeDigital(null);
    setSelectedMacroSaudeDigital(null);
    setSelectedGeresSaudeDigital(null);
    setSelectedMunicipioSaudeDigital(null);
    setSelectedTipoUnidadeSaudeDigital(null);
    setSelectedNomeUnidadeSaudeDigital(null);
    setResetKey((prevKey) => prevKey + 1);
    onResetSaudeDigitalFilters && onResetSaudeDigitalFilters(setResetKey);
    onFilterSaudeDigitalChange &&
      onFilterSaudeDigitalChange({
        selectedTipoAcaoSaudeDigital: null,
        selectedMacroSaudeDigital: null,
        selectedGeresSaudeDigital: null,
        selectedMunicipioSaudeDigital: null,
        selectedTipoUnidadeSaudeDigital: null,
        selectedNomeUnidadeSaudeDigital: null,
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-2 gap-3 mb-5">
        <Select
          color="blue"
          label="Tipo de ação"
          key={`tipoAcao-select-${resetKey}`}
          onChange={(value) => handleTipoAcaoSaudeDigitalFilterChange(value)}
        >
          {nomeTipoAcaoSaudeDigital.map((tipoAcaoSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {tipoAcaoSaudeDigital}
            </Select.Option>
          ))}
        </Select>

        <Select
          color="blue"
          label="Macro"
          key={`macro-select-${resetKey}`}
          onChange={(value) => handleMacroSaudeDigitalFilterChange(value)}
        >
          {nomeMacrosSaudeDigital.map((macroSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {macroSaudeDigital}
            </Select.Option>
          ))}
        </Select>

        <Select
          color="blue"
          label="Geres"
          key={`geres-select-${resetKey}`}
          onChange={(value) => handleGeresSaudeDigitalFilterChange(value)}
        >
          {nomeGeresSaudeDigital.map((geresSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {geresSaudeDigital}
            </Select.Option>
          ))}
        </Select>

        <Select
          color="blue"
          label="Município"
          key={`municipio-select-${resetKey}`}
          onChange={(value) => handleMunicipioSaudeDigitalFilterChange(value)}
        >
          {nomeMunicipiosSaudeDigital.map((municipioSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {municipioSaudeDigital}
            </Select.Option>
          ))}
        </Select>

        <Select
          color="blue"
          label="Tipo de Unidade"
          key={`tipoUnidade-select-${resetKey}`}
          onChange={(value) => hanldeTipoUnidadeSaudeDigitalFilterChange(value)}
        >
          {nomeTipoUnidadeSaudeDigital.map((tipoUnidadeSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {tipoUnidadeSaudeDigital}
            </Select.Option>
          ))}
        </Select>

        <Select
          color="blue"
          label="Nome da unidade"
          key={`nomeUnidade-select-${resetKey}`}
          onChange={(value) => handleNomeUnidadeSaudeDigitalFilterChange(value)}
        >
          {nomeUnidadeSaudeDigital.map((nomeUnidadeSaudeDigital, index) => (
            <Select.Option key={index} value={index + 1}>
              {nomeUnidadeSaudeDigital}
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

export default FiltersSaudeDigital;
