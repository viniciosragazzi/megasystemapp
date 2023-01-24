import { createContext, useState, useEffect } from "react";
import datas from "../data.json";

//Firebase

import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  onValue,
} from "firebase/database";
import { StartFirebase } from "../utils/FirebaseConfig";

const db = StartFirebase();
export const DadosContext = createContext({});
const ContextProvider = ({ children }) => {
  const [datasFiltered, setDatasFiltered] = useState([]);
  const [quantityDataByPage, setQuantityDataByPage] = useState(10);
  const [inputData, setInputData] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const dados = localStorage.getItem("dados");
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [idItem, setIdItem] = useState("");
  useEffect(() => {
    const dbRef = ref(db, "Entradas");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let data = childSnapshot.val();
        records.push(data);
      });
      setDataArray(records)
      setLoading(false)
    });
  }, []);

  ////////////////////
  const insertDataInFirebase = (data) => {
    const dbRef = ref(db);
    const record = data;
    const address = "Entradas/" + record.id;
    get(child(dbRef, address)).then(async (snapshot) => {
      if (snapshot.exists()) {
        alert("cannot create, user already exists");
      } else {
        await set(ref(db, address), record);
      }
    });
  };

  const updateDataInFirebase = (data) => {
    const dbRef = ref(db);
    const record = data;
    const address = "Entradas/" + record.id;
    get(child(dbRef, address)).then(async (snapshot) => {
      if (snapshot.exists()) {
        await update(ref(db, address), record);
      } else {
        alert("cannot update, user already not exists");
      }
    });
  };

  const btnEnviarClick = (data) => {
    if (modalType === "new") {
      const dataArray2 = [data, ...dataArray];
      setDataArray(dataArray2);
      localStorage.setItem("dados", JSON.stringify(dataArray2));
      insertDataInFirebase(data);
      setModalOpen(false);
    }

    if (modalType === "edit") {
      const indexItem = dataArray.findIndex((item) => item.id === data.id);

      let dataArray2 = [...dataArray];
      dataArray2[indexItem] = data;
      setDataArray(dataArray2);
      localStorage.setItem("dados", JSON.stringify(dataArray2));
      updateDataInFirebase(data);
      setModalOpen(false);
    }
  };
  ///////////////
  const deleteDataInFirebase = (data) => {
    const dbRef = ref(db);
    const record = data;
    const address = "Entradas/" + record.id;
    get(child(dbRef, address)).then(async (snapshot) => {
      if (snapshot.exists()) {
        await remove(ref(db, address));
      } else {
        alert("cannot delete, user does not exists");
      }
    });
  };

  const btnExcluirClick = (id) => {
    const dataArray2 = [...dataArray];
    const indexItem = dataArray.findIndex((item) => item.id === id);
    dataArray2.splice(indexItem, 1);
    setDataArray(dataArray2);
    deleteDataInFirebase(dataArray[indexItem]);
    localStorage.setItem("dados", JSON.stringify(dataArray2));
  };

  useEffect(() => {
    const filteredData = dataArray.filter(
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
  }, [quantityDataByPage, inputData, dataArray]);

  //Modal Config

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("new");

  return (
    <DadosContext.Provider
      value={{
        datas,
        datasFiltered,
        quantityDataByPage,
        setQuantityDataByPage,
        inputData,
        setInputData,
        modalOpen,
        setModalOpen,
        modalType,
        setModalType,
        scrolled,
        setScrolled,
        btnEnviarClick,
        idItem,
        setIdItem,
        btnExcluirClick,
        loading
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
