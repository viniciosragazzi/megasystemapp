import { Pencil, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { DadosContext } from "../context/ContextApp";

export function Table() {
  const { datasFiltered, quantityDataByPage, setQuantityDataByPage } =
    useContext(DadosContext);

  return (
    <div className="tableArea w-full  flex justify-center items-center">
      <div className="p-5  h-screen ">
        <h1 className="text-2xl font-bold mb-2">Cliente Cadastrados</h1>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
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
                    {data.dataEnt}
                  </td>

                  <td className="p-3 text-lg  text-snow-white whitespace-nowrap ">
                    <span className=" px-3 py-2  w-full flex items-center justify-center font-bold text-xs uppercase tracking-wider  bg-green-200 rounded-lg bg-opacity-50">
                      {data.status}
                    </span>
                  </td>
                  <td className="p-3 text-3xl flex  whitespace-nowrap text-primary-purple">
                    <span className=" cursor-pointer hover:scale-90 transition-transform">
                      <Pencil />
                    </span>
                    <span className=" cursor-pointer hover:scale-90 transition-transform">
                      <Trash />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mobileItens">
          {datasFiltered.map((data) => (
            <div className="bg-dark-grey item space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-lg gap-3 relative">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #{data.id}
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-white-800 bg-green-200 rounded-lg bg-opacity-50">
                    {data.status}
                  </span>
                </div>
                <div className="flex text-2xl gap-2 absolute right-0 text-dark-purple">
                  <span className=" cursor-pointer hover:scale-90 transition-transform">
                    <Pencil />
                  </span>
                  <span className=" cursor-pointer hover:scale-90 transition-transform">
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
