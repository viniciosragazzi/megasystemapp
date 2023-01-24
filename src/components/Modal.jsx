import { PlusCircle, X } from "phosphor-react";
import { useContext, useState, useEffect } from "react";
import { DadosContext } from "../context/ContextApp";

export function Modal() {
  const {
    modalOpen,
    setModalOpen,
    setModalType,
    modalType,
    btnEnviarClick,
    datasFiltered,
    idItem,
    setIdItem,
  } = useContext(DadosContext);

  const [id, setId] = useState("");

  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [doc, setDoc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [acessorios, setAcessorios] = useState("");
  const [modelo, setModelo] = useState("");
  const [valor, setValor] = useState("");
  const [marca, setMarca] = useState("");
  const [nSerie, setNSerie] = useState("");
  const [problema, setProblema] = useState("");
  const [servico, setServico] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    if (modalType === "edit") {
      const itemEdited = datasFiltered.filter((data, index) => {
        return data.id.toString().includes(idItem);
      });
      setId(itemEdited[0].id);
      setNome(itemEdited[0].nome);
      setContato(itemEdited[0].contato);
      setDoc(itemEdited[0].doc);
      setEquipamento(itemEdited[0].equipamento);
      setAcessorios(itemEdited[0].acessorios);
      setModelo(itemEdited[0].modelo);
      setValor(itemEdited[0].valor);
      setMarca(itemEdited[0].marca);
      setNSerie(itemEdited[0].nSerie);
      setProblema(itemEdited[0].problema);
      setServico(itemEdited[0].servico);
      setTecnico(itemEdited[0].tecnico);
      setCidade(itemEdited[0].cidade);
      setEndereco(itemEdited[0].endereco);
      setEstado(itemEdited[0].estado);
      setStatus(itemEdited[0].status);
      setData(itemEdited[0].data);
      setHora(itemEdited[0].hora);
    }
  }, [modalType]);
  const enviar = () => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const stateProperties = {
      id: modalType === "edit" ? id : getRandomInt(14035, 8053548),

      nome,
      contato,
      doc,
      endereco,
      cidade,
      estado,
      equipamento,
      acessorios,
      modelo,
      valor,
      marca,
      nSerie,
      problema,
      servico,
      tecnico,
      status,
      data,
      hora,
    };

    btnEnviarClick(stateProperties);
  };
  const clickCloseModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  return (
    <div
      className={`modal-container w-full h-full fixed top-0 left-0  justify-center items-center p-container-mobile   z-50 ${
        modalOpen ? "flex" : "hidden"
      }`}
    >
      <div className="modal-box relative w-full h-full max-w-3xl overflow-scroll bg-white rounded-3xl p-container-mobile  ">
        <X
          onClick={clickCloseModal}
          size={16}
          className="absolute right-0 mx-6 text-darkD cursor-pointer hover:scale-95 transition-transform"
        />
        <div className="text-darkD flex flex-col gap-1 ">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span className="text-dark-purple">Novo </span>Cliente
          </h1>
          <p className=" font-bold text-lg  text-slate-600">
            Adicione todos os dados do cliente e do equipamento
          </p>
        </div>
        <div className="form-area flex flex-col gap-4 w-full  mt-10 ">
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="nome"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Nome*
              <input
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                type="text"
                id="nome"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="contato"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Contato*
              <input
                value={contato}
                onChange={(e) => {
                  setContato(e.target.value);
                }}
                type="text"
                id="contato"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="doc"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              CPF/CNPJ*
              <input
                value={doc}
                onChange={(e) => {
                  setDoc(e.target.value);
                }}
                type="text"
                id="doc"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="endereco"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Endereço*
              <input
                value={endereco}
                onChange={(e) => {
                  setEndereco(e.target.value);
                }}
                type="text"
                id="endereco"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="cidade"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Cidade*
              <input
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value);
                }}
                type="text"
                id="cidade"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="estado"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Estado*
              <input
                value={estado}
                onChange={(e) => {
                  setEstado(e.target.value);
                }}
                type="text"
                id="estado"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="equipamento"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Equipamento*
              <input
                value={equipamento}
                onChange={(e) => {
                  setEquipamento(e.target.value);
                }}
                type="text"
                id="equipamento"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="acessorios"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Acessorios*
              <input
                value={acessorios}
                onChange={(e) => {
                  setAcessorios(e.target.value);
                }}
                type="text"
                id="acessorios"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="modelo"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Modelo*
              <input
                value={modelo}
                onChange={(e) => {
                  setModelo(e.target.value);
                }}
                type="text"
                id="modelo"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="valor"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Valor*
              <input
                value={valor}
                onChange={(e) => {
                  setValor(e.target.value);
                }}
                type="text"
                id="valor"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="marca"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Marca*
              <input
                value={marca}
                onChange={(e) => {
                  setMarca(e.target.value);
                }}
                type="text"
                id="marca"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="nSerie"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              N* de Série*
              <input
                value={nSerie}
                onChange={(e) => {
                  setNSerie(e.target.value);
                }}
                type="text"
                id="nSerie"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="marca"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Problema Apresentado*
              <textarea
                value={problema}
                onChange={(e) => {
                  setProblema(e.target.value);
                }}
                name="problema"
                id="problema"
                className="w-full min-h-[60px] border border-darkD  rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              ></textarea>
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="servico"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Serviço Executado
              <textarea
                value={servico}
                onChange={(e) => {
                  setServico(e.target.value);
                }}
                name="servico"
                id="servico"
                className="w-full min-h-[60px] border border-darkD  rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              ></textarea>
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="tecnico"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Técnico*
              <input
                value={tecnico}
                onChange={(e) => {
                  setTecnico(e.target.value);
                }}
                type="text"
                id="tecnico"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="status"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Status*
              <select
                name="status"
                id="status"
                value={status}
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="loja">Loja</option>

                <option value="orçamento">Orçamento</option>
                <option value="aprovado">Aprovado</option>
                <option value="pronto">Pronto</option>
                <option value="lojaPronto">Loja / Pronto</option>

                <option value="entregue">Entregue</option>
              </select>
            </label>
          </div>
          <div className="formBox flex text-darkD  gap-10">
            <label
              htmlFor="data"
              className="flex-1 font-bold text-lg flex flex-col gap-1 "
            >
              Data da Entrada*
              <input
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
                type="date"
                id="data"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
            <label
              htmlFor="hora"
              className="flex-1 font-bold text-lg flex flex-col gap-1"
            >
              Hora da Entrada*
              <input
                value={hora}
                onChange={(e) => {
                  setHora(e.target.value);
                }}
                type="time"
                id="hora"
                className="w-full border border-darkD min-h-[25px] rounded-lg  border-opacity-25 p-2 focus:outline-dark-purple focus:border-dark-purple"
              />
            </label>
          </div>
        </div>
        <div className="mt-10 w-full flex justify-center gap-10 ">
          <button className="flex w-full max-w-md p-2 justify-center items-center text-xl gap-2 bg-none text-darkD border border-dark-grey font-bold rounded-lg hover:scale-95 transition-transform">
            Cancelar
          </button>
          <button
            onClick={() => {
              enviar();
            }}
            className="flex w-full max-w-md p-2 justify-center items-center text-xl gap-2 bg-dark-purple rounded-lg hover:scale-95 transition-transform"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
