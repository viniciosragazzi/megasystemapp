import { useContext, useState } from "react";
import { DadosContext } from "../context/ContextApp";

export function Pagination({ limit, total, offset, setOffset }) {
  const { quantityDataByPage } = useContext(DadosContext);

  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  // const INDEX_ITEMS =
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const firt = Math.max(current - MAX_LEFT, 1);

  return (
    <ul className="flex gap-4">
      {Array.from({
        length: Math.min(MAX_ITEMS, pages),
      })
        .map((_, index) => Math.ceil(index + firt))
        .map((page, i) => (
          <li
          key={i}
            onClick={() => setOffset((page - 1) * limit)}
            className={`w-10 h-10 font-bold rounded-full flex justify-center items-center cursor-pointer   ${
              current === i + 1 ? "bg-snow-white text-darkD" : "bg-dark-purple"
            }`}
          >
            {page}
          </li>
        ))}
    </ul>
  );
}
