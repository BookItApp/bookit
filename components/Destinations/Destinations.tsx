import Link from "next/link";
import Card from "../Card";
import Cartel from "../../public/images/cartel.png";

const Destinations = () => (
  <div className="w-full">
      <h2 className="font-semibold text-xl">Popular Destinations</h2>
    <div className="flex justify-between mt-4  w-full items-center rounded-lg">
      <Card title={"Medeliin"} img={Cartel} alt={"medeliin"} />
      <Card title={"Medeliin"} img={Cartel} alt={"medeliin"} />
      <Card title={"Medeliin"} img={Cartel} alt={"medeliin"} />
      <Card title={"Medeliin"} img={Cartel} alt={"medeliin"} />
      <Card title={"Medeliin"} img={Cartel} alt={"medeliin"} />
    </div>
  </div>
);
export default Destinations;
