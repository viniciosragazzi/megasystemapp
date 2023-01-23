import { Header } from "../components/Header";
import { Table } from "../components/Table";

export function Home() {
  return (
    <div className="text-snow-white h-screen flex flex-col">
      <Header />
      <Table />
    </div>
  );
}
