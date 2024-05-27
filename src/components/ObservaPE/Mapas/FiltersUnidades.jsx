import { Select, Button } from "@material-tailwind/react";
import { useState } from "react";
import dataMapUnit from "../../../data/mapas/mapaUnidade.json";

const FiltersUnidades = ({
  onTipoGestaoUnidadeChange,
  onTipoUnidadeChange,
  onMacroUnidadeChange,
  onGeresUnidadeChange,
  onMunicipioUnidadeChange,
  onUnidadeChange,
  onResetUnidadeFilters,
  onFilterUnidadeChange,
}) => {
  const [selectedTipoGestaoUnidade, setSelectedTipoGestaoUnidade] =
    useState(null);
  const [selectedTipoUnidade, setSelectedTipoUnidade] = useState(null);
  const [selectedMacroUnidade, setSelectedMacroUnidade] = useState(null);
  const [selectedGeresUnidade, setSelectedGeresUnidade] = useState(null);
  const [selectedMunicipioUnidade, setSelectedMunicipioUnidade] =
    useState(null);
  const [selectedUnidade, setSelectedUnidade] = useState(null);
  const [resetKey, setResetKey] = useState(0);

  const nomeTipoGestao = Array.from(
    new Set(dataMapUnit.map((unidade) => unidade.tipoGestao))
  ).sort();

  const nomeTipoUnidade = Array.from(
    new Set(
        dataMapUnit
        .filter(
          (unidade) =>
            !selectedTipoGestaoUnidade ||
            unidade.tipoGestao === selectedTipoGestaoUnidade
        )
        .map((unidade) => unidade.tipoUnidade)
    )
  ).sort();

  const nomeMacroUnidade = Array.from(
    new Set(
        dataMapUnit
        .filter(
          (unidade) =>
            (!selectedTipoGestaoUnidade ||
              unidade.tipoGestao === selectedTipoGestaoUnidade) &&
            (!selectedTipoUnidade ||
              unidade.tipoUnidade === selectedTipoUnidade)
        )
        .map((unidade) => unidade.macro)
    )
  ).sort();

  const nomeGeresUnidade = Array.from(
    new Set(
        dataMapUnit
        .filter(
          (unidade) =>
            (!selectedTipoGestaoUnidade ||
              unidade.tipoGestao === selectedTipoGestaoUnidade) &&
            (!selectedTipoUnidade ||
              unidade.tipoUnidade === selectedTipoUnidade) &&
            (!selectedMacroUnidade || unidade.macro === selectedMacroUnidade)
        )
        .map((unidade) => unidade.geres)
    )
  ).sort();

  const nomeMunicipioUnidade = Array.from(
    new Set(
        dataMapUnit
        .filter(
          (unidade) =>
            (!selectedTipoGestaoUnidade ||
              unidade.tipoGestao === selectedTipoGestaoUnidade) &&
            (!selectedTipoUnidade ||
              unidade.tipoUnidade === selectedTipoUnidade) &&
            (!selectedMacroUnidade || unidade.macro === selectedMacroUnidade) &&
            (!selectedGeresUnidade || unidade.geres === selectedGeresUnidade)
        )
        .map((unidade) => unidade.municipio)
    )
  ).sort();

  const nomeUnidade = Array.from(
    new Set(
        dataMapUnit
        .filter(
          (unidade) =>
            (!selectedTipoGestaoUnidade ||
              unidade.tipoGestao === selectedTipoGestaoUnidade) &&
            (!selectedTipoUnidade ||
              unidade.tipoUnidade === selectedTipoUnidade) &&
            (!selectedMacroUnidade || unidade.macro === selectedMacroUnidade) &&
            (!selectedGeresUnidade || unidade.geres === selectedGeresUnidade) &&
            (!selectedMunicipioUnidade ||
              unidade.municipio === selectedMunicipioUnidade)
        )
        .map((unidade) => unidade.unidade)
    )
  ).sort();

  const handleTipoGestaoUnidadeFilterChange = (value) => {
    const selectedTipoGestaoUnidade = nomeTipoGestao[value - 1];
    onTipoGestaoUnidadeChange(selectedTipoGestaoUnidade);
    setSelectedTipoGestaoUnidade(selectedTipoGestaoUnidade);
    setSelectedTipoUnidade(null);
    setSelectedMacroUnidade(null);
    setSelectedGeresUnidade(null);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade: null,
      selectedMacroUnidade: null,
      selectedGeresUnidade: null,
      selectedMunicipioUnidade: null,
      selectedUnidade: null,
    });
  };

  const handleTipoUnidadeFilterChange = (value) => {
    const selectedTipoUnidade = nomeTipoUnidade[value - 1];
    onTipoUnidadeChange(selectedTipoUnidade);
    setSelectedTipoUnidade(selectedTipoUnidade);
    setSelectedMacroUnidade(null);
    setSelectedGeresUnidade(null);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade,
      selectedMacroUnidade: null,
      selectedGeresUnidade: null,
      selectedMunicipioUnidade: null,
      selectedUnidade: null,
    });
  };

  const handleMacroFilterChange = (value) => {
    const selectedMacroUnidade = nomeMacroUnidade[value - 1];
    onMacroUnidadeChange(selectedMacroUnidade);
    setSelectedMacroUnidade(selectedMacroUnidade);
    setSelectedGeresUnidade(null);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade,
      selectedMacroUnidade,
      selectedGeresUnidade: null,
      selectedMunicipioUnidade: null,
      selectedUnidade: null,
    });
  };

  const handleGeresFilterChange = (value) => {
    const selectedGeresUnidade = nomeGeresUnidade[value - 1];
    onGeresUnidadeChange(selectedGeresUnidade);
    setSelectedGeresUnidade(selectedGeresUnidade);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade,
      selectedMacroUnidade,
      selectedGeresUnidade,
      selectedMunicipioUnidade: null,
      selectedUnidade: null,
    });
  };

  const handleMunicipioFilterChange = (value) => {
    const selectedMunicipioUnidade = nomeMunicipioUnidade[value - 1];
    onMunicipioUnidadeChange(selectedMunicipioUnidade);
    setSelectedMunicipioUnidade(selectedMunicipioUnidade);
    setSelectedUnidade(null);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade,
      selectedMacroUnidade,
      selectedGeresUnidade,
      selectedMunicipioUnidade,
      selectedUnidade: null,
    });
  };

  const handleUnidadeFilterChange = (value) => {
    const selectedUnidade = nomeUnidade[value - 1];
    onUnidadeChange(selectedUnidade);
    setSelectedUnidade(selectedUnidade);
    onFilterUnidadeChange({
      selectedTipoGestaoUnidade,
      selectedTipoUnidade,
      selectedMacroUnidade,
      selectedGeresUnidade,
      selectedMunicipioUnidade,
      selectedUnidade,
    });
  };

  const handleResetFilters = () => {
    setSelectedTipoGestaoUnidade(null);
    setSelectedTipoUnidade(null);
    setSelectedMacroUnidade(null);
    setSelectedGeresUnidade(null);
    setSelectedMunicipioUnidade(null);
    setSelectedUnidade(null);
    setResetKey((prevKey) => prevKey + 1);
    onResetUnidadeFilters && onResetUnidadeFilters(setResetKey);
    onFilterUnidadeChange &&
      onFilterUnidadeChange({
        selectedTipoGestaoUnidade: null,
        selectedTipoUnidade: null,
        selectedMacroUnidade: null,
        selectedGeresUnidade: null,
        selectedMunicipioUnidade: null,
        selectedUnidade: null,
      });
  };

  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-2 lg:gap-2 gap-3 mb-5">
        <Select
          color="blue"
          label="Tipo de Gestão"
          key={`tipoGestao-select-${resetKey}`}
          onChange={(value) => handleTipoGestaoUnidadeFilterChange(value)}
        >
          {nomeTipoGestao.map((tipoGestaoUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {tipoGestaoUnidade}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Tipo de Unidade"
          key={`tipoUnidade-select-${resetKey}`}
          onChange={(value) => handleTipoUnidadeFilterChange(value)}
        >
          {nomeTipoUnidade.map((tipoUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {tipoUnidade}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Macro"
          key={`macro-select-${resetKey}`}
          onChange={(value) => handleMacroFilterChange(value)}
        >
          {nomeMacroUnidade.map((macroUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {macroUnidade}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Geres"
          key={`geres-select-${resetKey}`}
          onChange={(value) => handleGeresFilterChange(value)}
        >
          {nomeGeresUnidade.map((geresUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {geresUnidade}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Município"
          key={`municipio-select-${resetKey}`}
          onChange={(value) => handleMunicipioFilterChange(value)}
        >
          {nomeMunicipioUnidade.map((municipioUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {municipioUnidade}
            </Select.Option>
          ))}
        </Select>
        <Select
          color="blue"
          label="Unidades"
          key={`nome-select-${resetKey}`}
          onChange={(value) => handleUnidadeFilterChange(value)}
        >
          {nomeUnidade.map((nomeUnidade, index) => (
            <Select.Option key={index} value={index + 1}>
              {nomeUnidade}
            </Select.Option>
          ))}
        </Select>
      </div>
      <mdiv>
        <Button
          color="white"
          className="border-[1px] border-[#B0BEC5] shadow-none hover:shadow-none hover:scale-[1.01] ml-[1px]"
          onClick={handleResetFilters}
        >
          Limpar Filtros
        </Button>
      </mdiv>
    </>
  );
};

export default FiltersUnidades;
