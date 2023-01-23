import { createContext, useState, useEffect } from "react";
import datas from "../data.json";

export const DadosContext = createContext({});
const ContextProvider = ({ children }) => {
  const [datasFiltered, setDatasFiltered] = useState([]);
  const [quantityDataByPage, setQuantityDataByPage] = useState(10);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const filteredData = datas.filter(
      (item, index) =>
        (item &&
          inputData.length > 1 &&
          (item.nome.toLowerCase().includes(inputData.toLowerCase()) ||
            item.marca.toLowerCase().includes(inputData.toLowerCase()) ||
            item.id.toString().includes(inputData.toLowerCase()) ||
            item.status.toLowerCase().includes(inputData.toLowerCase()) ||
            item.modelo.toLowerCase().includes(inputData.toLowerCase()) ||
            item.equipamento
              .toLowerCase()
              .includes(inputData.toLowerCase()))) ||
        (inputData.length < 3 && index <= quantityDataByPage)
    );
    setDatasFiltered(filteredData);
  }, [quantityDataByPage, inputData]);

  return (
    <DadosContext.Provider
      value={{
        datas,
        datasFiltered,
        quantityDataByPage,
        setQuantityDataByPage,
        inputData,
        setInputData,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
