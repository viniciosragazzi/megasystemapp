import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

import { useContext, useEffect } from "react";

import { DadosContext } from "../context/ContextApp";
import { Spinner } from "phosphor-react";

export function Home() {
  const { scrolled, setScrolled, loading } = useContext(DadosContext);

  const ScrollTracker = () => {
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
    }, []);
  };
  ScrollTracker();
  return (
    <div className="text-snow-white h-screen flex flex-col 	">
      <Modal />
      <Header />
      {loading ? (
        <div className=" w-full h-[50%] flex justify-center items-center ">
          {" "}
          <Spinner className=" animate-spin" size={45} />
        </div>
      ) : (
        <Table />
      )}
    </div>
  );
}
