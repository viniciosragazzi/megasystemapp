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
  const dt = [
    {
      "acessorios": "",
      "cidade": "//",
      "contato": "974217352 / 980096085",
      "data": "2023-01-21",
      "doc": "//",
      "endereco": "//",
      "equipamento": "Violão",
      "hora": "13:02",
      "id": 7056577,
      "marca": "Strinberg",
      "modelo": "Rosa",
      "nSerie": "000000",
      "nome": "Erida ",
      "problema": "Equalizador não liga (revisão elétrica)",
      "servico": "",
      "status": "loja",
      "tecnico": "Lucas",
      "estado": "//",
      "valor": ""
    },
    {
      "acessorios": "",
      "cidade": "",
      "contato": "",
      "data": "2023-01-20",
      "doc": "",
      "endereco": "",
      "equipamento": "Teclado",
      "hora": "11:38",
      "id": 7065005,
      "marca": "Yamaha",
      "modelo": "x",
      "nSerie": "",
      "nome": "Andre Lira ",
      "problema": "Tecla mi 4 falhando",
      "servico": "",
      "status": "loja",
      "tecnico": "Magnus",
      "estado": "",
      "valor": ""
    },
    {
      "acessorios": "n/a",
      "cidade": "n/a",
      "contato": "969162291",
      "data": "2023-01-05",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Teclado ",
      "hora": "22:25",
      "id": 393184,
      "marca": "Casio ",
      "modelo": "CTk 480",
      "nSerie": "0000",
      "nome": "Aquiles Pereira",
      "problema": "Revisão Geral (Orçamento)  -- \nNão LIga --\nVerificar a possibilidade de uma fonte, capa, e suporte.\n\n",
      "servico": "Soldagens no Jack da fonte --\nLimpeza da chave Power Mode --\nLimpeza das membranas  --",
      "status": "aprovado",
      "tecnico": "Magnus",
      "estado": "n/a",
      "valor": "240.00"
    },
    {
      "acessorios": "Capa ",
      "cidade": "NI",
      "contato": "21982035074",
      "data": "2023-01-17",
      "doc": "17616262724",
      "endereco": "Rua Oiticica - 480",
      "equipamento": "Violão ",
      "hora": "11:06",
      "id": 777892,
      "marca": "Vogg",
      "modelo": "",
      "nSerie": "",
      "nome": "Pedro ",
      "problema": "Cordas trastejando",
      "servico": "-Regulagem de tensor\n-Regulagem de altura de pestana\n-Regulagem de altura de rastilho\n-Limpeza e lubrificação das tarraxas\n-Limpeza e hidratação da escala\n-Polimento dos trastes\n-Limpeza e enceramento",
      "status": "orçamento",
      "tecnico": "Vinicios",
      "estado": "RJ",
      "valor": "160.00"
    },
    {
      "acessorios": "Teclado: Fonte na Capa",
      "cidade": "n/a",
      "contato": "21992142708",
      "data": "2023-01-05",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Caixa de Som / Teclado",
      "hora": "21:30",
      "id": 1163010,
      "marca": "Teclado: Casio  / Caixa : Titanium",
      "modelo": "Teclado: XWP1 / Caixa: Guitar 100",
      "nSerie": "0000",
      "nome": "Aron de Mesquita Macedo ",
      "problema": ">{ Teclado Casio XWP1\n\nLiga porém não inicia o sistema e nem sai som. ( Fonte de Alimentação na Capa) }<\n\n>{ Caixa de Som  Titanium Guitar 100\n\nNão emite som (Revisão Geral ) }<\n\n",
      "servico": ">> { Teclado Casio XW-P1:\n- Troca do ci eprom \n- Troca do regulador \n- Troca dos capacitores da placa principal\nValor: 560R$\n  } <<\n\n>> { Caixa de Som  Titanium Guitar 100: \n- Troca da saída tda \n- Troca do potenciômetro\n\nValor: 260R$\n} <<\n\n",
      "status": "orçamento",
      "tecnico": "Magnus",
      "estado": "n/a",
      "valor": "820.00"
    },
    {
      "acessorios": "",
      "cidade": "Mesquita",
      "contato": "980598033",
      "data": "2023-01-13",
      "doc": "09686743723",
      "endereco": "Rua Wilson Fraia 41 - Cosmorama",
      "equipamento": "Violão",
      "hora": "10:38",
      "id": 1198161,
      "marca": "Strinberg",
      "modelo": "SA200C",
      "nSerie": "",
      "nome": "Cristina Alves ",
      "problema": "Mão Quebrada - Colagem e Reforço",
      "servico": "",
      "status": "orçamento",
      "tecnico": "Lucas",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "--",
      "cidade": "NI",
      "contato": "964612335",
      "data": "2023-01-12",
      "doc": "02713157765",
      "endereco": "Rua Alberto Soares 74",
      "equipamento": "Amplificador",
      "hora": "14:37",
      "id": 1937700,
      "marca": "Oneal",
      "modelo": " OP 3500",
      "nSerie": "0000",
      "nome": "Angelo",
      "problema": "-Amplificador sem Potência (Sai som, porém sem volume)\n-Muito Ruido",
      "servico": "- Troca das saidas de Audio\n- Troca do ci eprom \n- Troca do regulador \n- Troca dos capacitores da placa principal \n- Revisão na Placa Principal\n\n>>> Obs.: Esse valor inclui todo o material e mão de obra<<<\n",
      "status": "entregue",
      "tecnico": "Miguel",
      "estado": "RJ",
      "valor": "520.00"
    },
    {
      "acessorios": "Fonte Na capa",
      "cidade": "",
      "contato": "21992142708",
      "data": "2023-01-12",
      "doc": "",
      "endereco": "",
      "equipamento": "Teclado",
      "hora": "10:38",
      "id": 2182814,
      "marca": "Casio",
      "modelo": " XWP1",
      "nSerie": "",
      "nome": "Aron de Mesquita Macedo ",
      "problema": "Liga porém não inicia o sistema e nem sai som. ",
      "servico": "\n- Troca do ci eprom \n- Troca do regulador \n- Troca dos capacitores da placa principal\n",
      "status": "lojaPronto",
      "tecnico": "Magnus",
      "estado": "",
      "valor": "520.00"
    },
    {
      "acessorios": "",
      "cidade": "n/a",
      "contato": "997353506",
      "data": "2023-01-10",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Violão ",
      "hora": "15:18",
      "id": 2526171,
      "marca": "Di Giorgio",
      "modelo": "1992",
      "nSerie": "0000",
      "nome": "Felipe",
      "problema": "Revisão Geral",
      "servico": "\n-Revisão de parte elétrica:\n—Limpeza interna e externa do equalizador\n—Limpeza e Desoxidação do jack\n\n-Regulagem de tensor\n-Regulagem de altura de pestana\n-Regulagem de altura de rastilho\n-Limpeza e lubrificação das tarraxas\n-Limpeza e hidratação da escala\n-Polimento dos trastes\n-Limpeza e enceramento",
      "status": "entregue",
      "tecnico": "Lucas",
      "estado": "n/a",
      "valor": "255.00"
    },
    {
      "acessorios": "cabo de força",
      "cidade": "Nova iguaçu",
      "contato": "21 997187318",
      "data": "2023-01-16",
      "doc": "",
      "endereco": "av itapimirim 90 boa esperança",
      "equipamento": "Microfone ",
      "hora": "15:45",
      "id": 2904376,
      "marca": "Tonor",
      "modelo": "",
      "nSerie": "",
      "nome": "Danilo Gonçalves",
      "problema": "som baixo e xiado",
      "servico": "",
      "status": "loja",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "1 Mic  + Fonte  + Base",
      "cidade": "NI",
      "contato": "21967083435",
      "data": "2023-01-12",
      "doc": "02739916710",
      "endereco": "Rua Oliveira Rodrigues Alves 1776",
      "equipamento": "Microfone ",
      "hora": "10:53",
      "id": 3093620,
      "marca": "Kadosh",
      "modelo": "K581S",
      "nSerie": "",
      "nome": "Ronaldo ",
      "problema": "Base não recebe sinal do microfone (Revisão)",
      "servico": "",
      "status": "orçamento",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "",
      "cidade": "Mesquita",
      "contato": "994324411",
      "data": "2023-01-19",
      "doc": "12625793763",
      "endereco": "Rua Aurora 917 Edson Passos",
      "equipamento": "Violão",
      "hora": "14:15",
      "id": 3720512,
      "marca": "Di Giorgio",
      "modelo": "Estudante n 18",
      "nSerie": "",
      "nome": "Priscila Soares",
      "problema": "Braço Quebrado (Orçamento)\n",
      "servico": "",
      "status": "loja",
      "tecnico": "Lucas",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "Fonte na Capa ",
      "cidade": "Japeri",
      "contato": "971931972",
      "data": "2023-01-10",
      "doc": "15243128783",
      "endereco": "Rua Alcebiades Alvez de Aguiar 33 Eng Pereira",
      "equipamento": "Teclado",
      "hora": "13:45",
      "id": 4438187,
      "marca": "Yamaha",
      "modelo": "P35",
      "nSerie": "n/a",
      "nome": "Abner David",
      "problema": "Liga, porém não sai som",
      "servico": "n/a",
      "status": "loja",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": "0"
    },
    {
      "acessorios": "Acessorios da Ponte (Molas e Pivo) na capa",
      "cidade": "NI",
      "contato": "21974425914",
      "data": "2023-01-09",
      "doc": "13773320710",
      "endereco": "n/a",
      "equipamento": "Guitarra ",
      "hora": "12:38",
      "id": 4553997,
      "marca": "Tagima",
      "modelo": "J3",
      "nSerie": "",
      "nome": "Luiz Antonio",
      "problema": "n/a",
      "servico": "- Revisão da Parte elétrica\n  -- Blindagem (tinta condutiva InkTronica)\n  -- Limpeza e Desoxidação do Jack\n  -- Limpeza e Desoxidação das chaves\n  -- Limpeza e Desoxidação  dos potenciômetros\n\n-Regulagem geral do Equipamento\n  -- Regulagem do tensor\n  -- Regulagem da altura da ponte\n  -- Regulagem das oitavas\n  -- Limpeza e Desoxidação dos Captadores\n  -- Regulagem da altura dos Captadores\n  -- Limpeza e lubrificação das tarraxas\n  -- Limpeza e hidratação das escalas \n  -- Polimento dos trastes\n  -- Limpeza e enceramento do instrumento\n\n5 dias úteis no máximo",
      "status": "entregue",
      "tecnico": "Lucas",
      "estado": "RJ",
      "valor": "320.00"
    },
    {
      "acessorios": "Nenhum",
      "cidade": "Não Informado",
      "contato": "21 99253-5729",
      "data": "2023-01-05",
      "doc": "Não Informado",
      "endereco": "Não Informado",
      "equipamento": "Mesa de Som ",
      "hora": "21:15",
      "id": 4794643,
      "marca": "Oneal",
      "modelo": "OMX",
      "nSerie": "0000",
      "nome": "Evair",
      "problema": "Mesa de Som com mal contao. Som abaixando sozinho ",
      "servico": "-- Revisão geral na mesa\n-- Troca de 6 pots slides \n-- Troca de 1 Jack p10\n-- Limpeza dos potenciômetros rotativos \n-- Ressoldas nas placas masters.\n>>>> Obs.: Esse valor inclui todo o material e mão de obra <<<<",
      "status": "entregue",
      "tecnico": "Magnus",
      "estado": "Não Informado",
      "valor": "340.00"
    },
    {
      "acessorios": "",
      "cidade": "NI",
      "contato": "998587139 (Marilda)",
      "data": "2023-01-16",
      "doc": "52016129700",
      "endereco": "Rua Celso Peçanha 121",
      "equipamento": "Violão",
      "hora": "16:12",
      "id": 5550045,
      "marca": "Nicol",
      "modelo": "",
      "nSerie": "",
      "nome": "Jorge Carlos Nogueiraa",
      "problema": "-- Regulagem Geral\n--  Transformar em Elétrico",
      "servico": "",
      "status": "orçamento",
      "tecnico": "Lucas",
      "estado": "RJ",
      "valor": "00.00"
    },
    {
      "acessorios": "Cabo de Força",
      "cidade": "Mesquita",
      "contato": "994549344",
      "data": "2023-01-11",
      "doc": "11837028761",
      "endereco": "Rua São Salvador 355 Casa 1",
      "equipamento": "Teclado",
      "hora": "15:38",
      "id": 5624471,
      "marca": "Roland",
      "modelo": "JV 80",
      "nSerie": "",
      "nome": "Washington",
      "problema": "Som em modo PIANO  não sai da altura que deveria. ",
      "servico": "",
      "status": "orçamento",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "Equalizador Yamha na Capa",
      "cidade": "n/a",
      "contato": "988789161",
      "data": "2023-01-14",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Contrabaixo  / Violão",
      "hora": "10:56",
      "id": 5720218,
      "marca": "Violão: Yamaha / Contrabaixo: Ibanez ",
      "modelo": "Contrabaixo: Marrom",
      "nSerie": "0000",
      "nome": "Jorge Luiz",
      "problema": "Contrabaixo Ibanez Marrom Madeira\n\nNão sai som (Revisão na parte elétrica)\n>>>>>>>>>>>>\n\nViolão Yamaha \n\nRevisão no equalizador  ( O cliente comprou um novo, verificar a possibilidade e verificar se é viável a permanência do antigo.)\n",
      "servico": "Pacote revisão de parte elétrica Contrabaixo Ibanez Soundgear GSR205B:\n\n\n—Blindagem (tinta condutiva InkTronica)\n—Limpeza e Desoxidação do jack\n—Limpeza e Desoxidação da chave\n—Limpeza e Desoxidação dos captadores\n—Organização da fiação interna\n—Limpeza e lubrificação dos potenciômetros\nViolão Yamaha AC1M\n\n- Troca do Afinador/Equalizador /  polimento do contato do slot de pilhas.",
      "status": "pronto",
      "tecnico": "Lucas",
      "estado": "n/a",
      "valor": "240.00"
    },
    {
      "acessorios": "n/a",
      "cidade": "n/a",
      "contato": "21 97001-9006",
      "data": "2023-01-06",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Teclado ",
      "hora": "11:29",
      "id": 6253093,
      "marca": "Casio ",
      "modelo": "Wk 7600",
      "nSerie": "0000",
      "nome": "~Paulo Roberto",
      "problema": "Liga, porém não sai som e visor não funciona",
      "servico": "-- Recuperação da placa mãe \n  -- Troca do ci eprom\n  -- Troca de resistores \n  -- Limpeza das membranas \n  -- Troca do pot de volume ",
      "status": "lojaPronto",
      "tecnico": "Magnus",
      "estado": "n/a",
      "valor": "590.00"
    },
    {
      "acessorios": "Sem Fonte / Com capa",
      "cidade": "Queimados",
      "contato": "21981789286",
      "data": "2023-01-19",
      "doc": "15614224793",
      "endereco": "Rua Projetada 1 182",
      "equipamento": "Teclado",
      "hora": "17:10",
      "id": 6419198,
      "marca": "Yamaha",
      "modelo": "E313",
      "nSerie": "",
      "nome": "Bruno",
      "problema": "Não Liga \nProblema no botão de Liga e Desliga",
      "servico": "",
      "status": "loja",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "2 microfones internos",
      "cidade": "Nova Iguaçu",
      "contato": "21966586795",
      "data": "2023-01-11",
      "doc": "01937199754",
      "endereco": "Rua Dona Delia 26",
      "equipamento": "Cajon",
      "hora": "12:00",
      "id": 6781410,
      "marca": "FSA ",
      "modelo": "Elite Series",
      "nSerie": "0000",
      "nome": "Marcio",
      "problema": "- Microfones Soltos\n- Aste interna amassada\n",
      "servico": "n/a",
      "status": "entregue",
      "tecnico": "Miguel",
      "estado": "RJ",
      "valor": "150.00"
    },
    {
      "acessorios": "N/A",
      "cidade": "Nova Iguaçu",
      "contato": "979720804",
      "data": "2023-01-19",
      "doc": "",
      "endereco": "Rua Major Sa freire 829",
      "equipamento": "Caixa deSom ",
      "hora": "10:11",
      "id": 7380623,
      "marca": "LL Audio ",
      "modelo": "n/a",
      "nSerie": "n/a",
      "nome": "Tio",
      "problema": "Entrada RCA quebrada\nLine Out Quebrada",
      "servico": "",
      "status": "loja",
      "tecnico": "Magnus",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "Fontes na capa",
      "cidade": "n/a",
      "contato": "987753321",
      "data": "2023-01-07",
      "doc": "n/a",
      "endereco": "n/a",
      "equipamento": "Teclados",
      "hora": "10:56",
      "id": 7886692,
      "marca": "Yamaha",
      "modelo": " E423 / PSR-295",
      "nSerie": "0000",
      "nome": "Pr Steve Austin",
      "problema": "Ambos os Teclados se encontravam com varias teclas falhando\n",
      "servico": "-- Reparo na placa de contato -- Reparo na saída de Áudio -- Troca de Membranas\n-- Revisão Geral nos Teclados\n",
      "status": "loja",
      "tecnico": "Miguel",
      "estado": "n/a",
      "valor": "760"
    },
    {
      "acessorios": "Capa",
      "cidade": "Rio de Janeiro ",
      "contato": "21996865036",
      "data": "2023-01-18",
      "doc": "13390183736",
      "endereco": "Rua Alberico Diniz 800 - Sulacape",
      "equipamento": "Trompete",
      "hora": "16:23",
      "id": 391729,
      "marca": "Michael ",
      "modelo": "1999",
      "nSerie": "D14120Q4424",
      "nome": "Jefte Silva Cardoso ",
      "problema": "Amassado na parte infeiro \nRevisão Geral\nLimpeza",
      "servico": "",
      "status": "aprovado",
      "tecnico": "Cleber",
      "estado": "RJ",
      "valor": ""
    },
    {
      "acessorios": "Capa ",
      "cidade": "NI",
      "contato": "21982035074",
      "data": "2023-01-17",
      "doc": "17616262724",
      "endereco": "Rua Oiticica - 480",
      "equipamento": "Violão ",
      "hora": "11:06",
      "id": 777892,
      "marca": "Vogg",
      "modelo": "",
      "nSerie": "",
      "nome": "Pedro ",
      "problema": "Cordas trastejando",
      "servico": "-Regulagem de tensor\n-Regulagem de altura de pestana\n-Regulagem de altura de rastilho\n-Limpeza e lubrificação das tarraxas\n-Limpeza e hidratação da escala\n-Polimento dos trastes\n-Limpeza e enceramento",
      "status": "pronto",
      "tecnico": "Vinicios",
      "estado": "RJ",
      "valor": "160.00"
    }
  ]
  
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
