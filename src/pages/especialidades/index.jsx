import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import Close from "../../assets/img/saudeCidadao/close.png";
import procedimentos from "../../data/especialidades/procedimentos.json";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const TABLE_HEAD_UNIDADES = ["Unidade", "Procedimento", "Serviço"];

function TableHospitaisAmbulatorio() {
  const [tableDataHospitaisAmbulatorio, setTableDataHospitaisAmbulatorio] =
    useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const processedData = [];
    Object.entries(procedimentos).forEach(
      ([servico, procedimentosDetalhados]) => {
        Object.entries(procedimentosDetalhados).forEach(
          ([procedimento, unidades]) => {
            unidades.forEach((unidade) => {
              processedData.push({
                unidade: unidade.nome,
                servico,
                procedimento,
              });
            });
          }
        );
      }
    );
    setTableDataHospitaisAmbulatorio(processedData);
    setSearchResults(processedData);
  }, []);

  useEffect(() => {
    const totalPagesCount = Math.ceil(searchResults.length / 10);
    setTotalPages(totalPagesCount);
  }, [searchResults]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredResults = tableDataHospitaisAmbulatorio.filter((item) =>
      item.procedimento.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to first page when searching
  };

  const sortByColumn = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortedData = [...currentItems].sort((a, b) => {
    const valueA = a[sortConfig.key];
    const valueB = b[sortConfig.key];

    if (typeof valueA === "string" && typeof valueB === "string") {
      if (sortConfig.direction === "ascending") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    } else {
      return 0;
    }
  });

  return (
    <>
      <Navbar />
      <div className="pt-40 pb-20">
        {/* <div className="pl-6 md:pl-16 lg:pl-32 xl:pl-40">
        <h1 className="text-4xl mb-5">Especialidades</h1>
      </div> */}
        <div className="flex flex-col gap-5 px-6 md:px-16 lg:px-32 xl:px-40">
          <Card className="h-full w-full bg-white">
            <CardHeader
              floated={false}
              shadow={false}
              className="rounded-none relative"
            >
              <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Busca de Procedimentos Médicos
                  </Typography>
                  {/* <Typography color="gray" className="mt-1 font-normal">
                  Procedimentos
                </Typography> */}
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <div className="w-full md:w-72">
                    <Input
                      label="Pesquisar procedimento"
                      icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                      onChange={handleSearch}
                      value={searchTerm}
                    />
                  </div>
                  <Link to="/saude-do-cidadao">
                    <motion.div
                      className="hidden lg:block h-6 w-6 cursor-pointer m-2"
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <img src={Close} alt="" />
                    </motion.div>
                    <motion.div
                      className="absolute right-0 top-12 block lg:hidden h-6 w-6 cursor-pointer m-2"
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 1.1 }}
                    >
                      <img src={Close} alt="" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD_UNIDADES.map((head) => (
                      <th
                        key={head}
                        onClick={() => sortByColumn(head.toLowerCase())}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {sortConfig.key === head.toLowerCase() && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className={`h-4 w-4 ${
                                sortConfig.direction === "ascending"
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedData.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="p-4 text-center">
                        Não foram encontradas procedimentos com este nome.
                      </td>
                    </tr>
                  ) : (
                    sortedData.map(
                      ({ unidade, procedimento, servico }, index) => (
                        <tr key={index}>
                          <td className="p-4 text-sm lg:text-base uppercase">
                            {unidade}
                          </td>
                          <td className="p-4 text-sm lg:text-base">
                            {procedimento}
                          </td>
                          <td className="p-4 text-sm lg:text-base">
                            {servico}
                          </td>
                        </tr>
                      )
                    )
                  )}
                </tbody>
              </table>
            </CardBody>
            <CardFooter className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Página {currentPage} de {totalPages}
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastItem >= searchResults.length}
                >
                  Próxima
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TableHospitaisAmbulatorio;
