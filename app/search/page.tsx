"use client";

import NYC from "../../public/images/nyc.jpeg";
import Image, { StaticImageData } from "next/image";

const Card = ({
  src,
  name,
  description,
  stars,
  category,
  price,
}: {
  src: StaticImageData;
  name: string;
  description: string;
  stars: number;
  category: "Hotel" | "Apartment" | "Resort" | "Villa";
  price: string;
}) => {
  let starsElements = [];
  for (let i = 0; i < stars; i++) {
    starsElements.push(
      <span className="font-icons text-2xl text-amber-500">star</span>
    );
  }
  return (
    <div className="rounded-md shadow-md w-full flex flex-row flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap border hover:shadow-lg transition">
      <div className="relative h-64 sm:min-h-16 sm:max-w-none lg:max-w-[16rem] w-full">
        <Image
          src={src}
          alt={name}
          fill
          className="rounded-t-md sm:rounded-tr-none sm:rounded-l-md"
        />
      </div>
      <div className="w-full flex flex-col items-start sm:items-end justify-between p-4 gap-4">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-row w-full items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row -mx-1 -mt-1">{starsElements}</div>
              <p
                className={`text-xs ${
                  category === "Hotel"
                    ? "bg-green-400 text-green-700"
                    : category === "Apartment"
                    ? "bg-violet-400 text-violet-700"
                    : category === "Resort"
                    ? "bg-orange-400 text-orange-700"
                    : "bg-sky-400 text-sky-700"
                } font-semibold px-2 py-0.5 rounded-full`}
              >
                {category}
              </p>
            </div>
            <p className="text-lg text-green-500">{price}</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <button className="flex flex-row gap-2 w-full sm:w-36 items-center justify-center px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-md text-white mt-2">
          <p>View deal</p>
          <span className="font-icons -mx-0.5">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <main className="h-full w-full flex flex-col items-start container gap-4 p-4 sm:p-0 sm:pt-4">
      <div className="flex flex-row gap-x-8 gap-y-4 items-center justify-between w-full flex-wrap">
        <h2 className="text-3xl font-bold">What are you looking for?</h2>
        <div className="flex flex-row gap-2 items-center w-full sm:w-auto">
          <input
            type={"text"}
            placeholder="Destination"
            className="rounded-md w-full sm:w-auto text-sm focus:ring-sky-400 focus:border-sky-400"
          ></input>
          <select
            title="Accomodation type"
            defaultValue={"Hotels"}
            className="rounded-md text-sm focus:ring-sky-400 focus:border-sky-400"
          >
            <option>Hotels</option>
            <option>Apartments</option>
            <option>Resorts</option>
            <option>Villas</option>
          </select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          src={NYC}
          name="Hilton Garden Inn New York-Midtown Park Ave"
          description="A hotel in New York."
          stars={5}
          category="Hotel"
          price="200$"
        />
        <Card
          src={NYC}
          name="Hilton Garden Inn New York-Midtown Park Ave"
          description="A hotel in New York."
          stars={5}
          category="Hotel"
          price="200$"
        />
        <Card
          src={NYC}
          name="Hilton Garden Inn New York-Midtown Park Ave"
          description="A hotel in New York."
          stars={5}
          category="Hotel"
          price="200$"
        />
        <Card
          src={NYC}
          name="Hilton Garden Inn New York-Midtown Park Ave"
          description="A hotel in New York."
          stars={5}
          category="Hotel"
          price="200$"
        />
      </div>
    </main>
  );
};
export default Search;
