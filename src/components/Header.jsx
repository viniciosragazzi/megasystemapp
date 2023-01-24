import { useContext, useState } from "react";

import {
  Plus,
  MagnifyingGlass,
  DotsThreeOutline,
  AndroidLogo,
} from "phosphor-react";

import { DadosContext } from "../context/ContextApp";

export function Header() {
  const {
    inputData,
    setInputData,
    quantityDataByPage,
    setQuantityDataByPage,
    modalOpen,
    setModalOpen,
    setModalType,
    scrolled
  } = useContext(DadosContext);

  const clickButtonNewRegister = () => {
    setModalOpen(true);
    setModalType("new");
    console.log(modalOpen);
  };
  return (
    <header className={`p-container-mobile md:px-container-desktop w-full  flex flex-col ${scrolled  ? 'fixed top-0 left-0 z-40 bg-black': ''}`}>
      <div className="top w-full min-h-[4rem]  flex flex-col md:flex-row p-4 py-6 items-center justify-between  border-opacity-20">
        <div className="flex flex-1 w-full justify-between">
          <h1 className=" text-2xl md:text-3xl font-bold font-hanken-grotesk tracking-wider	flex items-center">
            <AndroidLogo className="mr-1" size={24} />
            <span className="text-primary-purple">Mega</span>System
          </h1>
          <div className="flex gap-4 items-center ml-20 md:hidden">
            <button
              onClick={(e) => {
                clickButtonNewRegister();
              }}
              className="flex w-full max-w-[8rem]  p-2 justify-center items-center text-xl gap-2 bg-dark-purple rounded-lg hover:scale-95 transition-transform"
            >
              Novo <Plus size={14} />
            </button>
            <DotsThreeOutline size={30} />
          </div>
        </div>
        <div className="flex flex-row w-full max-w-xl mt-6 md:mt-0 gap-2 items-center">
          <div className="input flex items-center p-2 w-full min-h-[4rem] rounded-full overflow-hidden bg-dark-grey relative">
            <MagnifyingGlass size={20} />
            <input
              type="text"
              className="w-full h-full p-3  bg-transparent text-snow-white text-lg outline-none border-none focus:placeholder:translate-y-[-150%]  focus:placeholder:opacity-0 placeholder:transition-all placeholder:font-bold placeholder:text-xl"
              placeholder={`Search...`}
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          </div>
          <select
            name="show-quant"
            id="showQuant"
            className=" bg-dark-grey p-2 md:px-4 rounded-xl text-xl outline-none "
            value={quantityDataByPage}
            onChange={(e) => {
              setQuantityDataByPage(e.target.value);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className=" gap-4 items-center ml-20 hidden md:flex">
          <button
            onClick={(e) => {
              clickButtonNewRegister();
            }}
            className="flex w-full max-w-[8rem]   p-2 justify-center items-center text-xl gap-2 bg-dark-purple rounded-lg hover:scale-95 transition-transform"
          >
            Novo <Plus size={14} />
          </button>
          <DotsThreeOutline size={30} />
        </div>
      </div>
    </header>
  );
}
