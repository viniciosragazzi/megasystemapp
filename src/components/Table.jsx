import { Pencil, Spinner, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { DadosContext } from "../context/ContextApp";
import { Pagination } from "./Pagination";
export function Table() {
  const {
    datasFiltered,
    scrolled,
    idItem,
    setIdItem,
    modalOpen,
    setModalOpen,
    setModalType,
    modalType,
    quantityDataByPage,
    btnExcluirClick,
    loading,
    offset,
    setOffset,
  } = useContext(DadosContext);
  const LIMIT = quantityDataByPage;

  const clickEditBtn = (id) => {
    setIdItem(id);
    setModalType("edit");
    setModalOpen(true);
  };
  const clickExcluirBtn = (id) => {
    btnExcluirClick(id);
  };

  return (
    <div
      className={`tableArea w-full  flex flex-col  ${
        scrolled ? "mt-[100px]" : ""
      }`}
    >
      <div className="p-5 w-full  relative">
        <div className="flex w-full justify-center items-center  my-5">
          <h1 className="text-2xl font-bold mb-2 flex-1">
            Cliente Cadastrados
          </h1>

          <Pagination
            limit={LIMIT}
            total={24}
            offset={offset}
            setOffset={setOffset}
          />
        </div>
        <div className="overflow-auto rounded-lg shadow w-full  hidden md:block">
          <table className="w-full ">
            <thead className="bg-dark-grey">
              <tr>
                <th className="w-20 p-3 text-lg font-semibold tracking-wide text-left">
                  No.
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Nome
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Contato
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Equipamento
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Marca
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Modelo
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Valor
                </th>
                <th className="p-3 text-lg font-semibold tracking-wide text-left">
                  Data
                </th>
                <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {datasFiltered.map((data) => (
                <tr key={data.id} className="bg-dark-grey ">
                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    <a
                      href="#"
                      className="font-bold text-dark-purple hover:underline"
                    >
                      {data.id}
                    </a>
                  </td>
                  <td className="p-3 text-lg font-bold text-snow-white whitespace-nowrap">
                    {data.nome}
                  </td>
                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.contato}
                  </td>
                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.equipamento}
                  </td>
                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.marca}
                  </td>
                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.modelo}
                  </td>

                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.valor}
                  </td>

                  <td className="p-3 text-lg text-snow-white whitespace-nowrap">
                    {data.data}
                  </td>

                  <td className="p-3 text-lg  text-snow-white whitespace-nowrap ">
                    <span className=" px-3 py-2  w-full flex items-center justify-center font-bold text-xs uppercase tracking-wider  bg-green-200 rounded-lg bg-opacity-50">
                      {data.status}
                    </span>
                  </td>
                  <td className="p-3 text-3xl flex  whitespace-nowrap text-primary-purple">
                    <span
                      className=" cursor-pointer hover:scale-90 transition-transform"
                      onClick={() => {
                        clickEditBtn(data.id);
                      }}
                    >
                      <Pencil />
                    </span>
                    <span
                      onClick={() => {
                        clickExcluirBtn(data.id);
                      }}
                      className=" cursor-pointer hover:scale-90 transition-transform"
                    >
                      <Trash />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mobileItens w-full">
          {datasFiltered.map((data) => (
            <div
              key={data.id}
              className="bg-dark-grey item space-y-3 p-4 w-full rounded-lg shadow min-w-[320px]"
            >
              <div className="flex items-center space-x-2 text-lg gap-3 relative">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #{data.id}
                  </a>
                </div>
                <div className="text-gray-500">{data.data}</div>
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-white-800 bg-green-200 rounded-lg bg-opacity-50">
                    {data.status}
                  </span>
                </div>
                <div className="flex text-2xl gap-2 absolute right-0 text-dark-purple">
                  <span
                    onClick={() => {
                      clickEditBtn(data.id);
                    }}
                    className=" cursor-pointer hover:scale-90 transition-transform"
                  >
                    <Pencil />
                  </span>
                  <span
                    onClick={() => {
                      clickExcluirBtn(data.id);
                    }}
                    className=" cursor-pointer hover:scale-90 transition-transform"
                  >
                    <Trash />
                  </span>
                </div>
              </div>
              <div className="text-lg text-snow-white flex flex-wrap  gap-2">
                <div className="font-bold whitespace-nowrap">{data.nome}</div>
                <div className="whitespace-nowrap">{data.equipamento}</div>
                <div className="whitespace-nowrap text-dark-purple">
                  {data.marca}
                </div>
              </div>
              <div className="text-lg font-medium text-snow-white">
                R${data.valor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
