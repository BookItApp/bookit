"use client";

import useSWR from "swr";
import NYC from "../../public/images/nyc.jpeg";
import Image, { StaticImageData } from "next/image";
import fetcher from "../../lib/fetcher";
import { Accomodation } from "@prisma/client";
import { useState } from "react";

const Card = ({
  src,
  name,
  description,
  rating,
  type,
  price,
}: {
  src: string;
  name: string;
  description: string;
  rating: number;
  type: string;
  price: string;
}) => {
  console.log("src: ", src)
  let starsElements = [];
  for (let i = 0; i < rating; i++) {
    starsElements.push(
      <span className="font-icons text-2xl text-amber-500">star</span>
    );
  }
  return (
    <div className="rounded-md shadow-md w-full flex flex-row flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap border hover:shadow-lg transition">
      <div className="relative h-72 sm:min-h-16 sm:max-w-none lg:max-w-[16rem] w-full">
        <Image
          src={`/images/${src}`}
          alt={name}
          fill
          className="rounded-t-md sm:rounded-tr-none sm:rounded-l-md object-cover"
        />
      </div>
      <div className="w-full flex flex-col items-start sm:items-end justify-between p-4 gap-4">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-row w-full items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row -mx-1 -mt-1">{starsElements}</div>
              <p
                className={`text-xs ${
                  type === "Hotel"
                    ? "bg-green-400 text-green-700"
                    : type === "Apartment"
                    ? "bg-violet-400 text-violet-700"
                    : type === "Resort"
                    ? "bg-orange-400 text-orange-700"
                    : "bg-sky-400 text-sky-700"
                } font-semibold px-2 py-0.5 rounded-full`}
              >
                {type}
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
  const [destination, setDestination] = useState<string>();
  const [type, setType] = useState<string>("Hotel");
  const { data, error, isLoading } = useSWR<Accomodation[]>(
    `/api/accomodations?location=${destination}&type=${type}`,
    fetcher,
  );
  return (
    <main className="h-full w-full flex flex-col items-start container gap-4 p-4">
      <div className="flex flex-row gap-x-8 gap-y-4 items-center justify-between w-full flex-wrap">
        <h2 className="text-3xl font-bold">What are you looking for?</h2>
        <div className="flex flex-row gap-2 items-center w-full sm:w-auto">
          <input
            type={"text"}
            placeholder="Destination"
            onChange={(e) => setDestination(e.target.value)}
            className="rounded-md w-full sm:w-auto text-sm focus:ring-sky-400 focus:border-sky-400"
          ></input>
          <select
            title="Accommodation type"
            onChange={(e) => setType(e.target.value)}
            className="rounded-md text-sm focus:ring-sky-400 focus:border-sky-400"
          >
            <option>Hotel</option>
            <option>Apartment</option>
            <option>Resort</option>
            <option>Villa</option>
          </select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {data ? (
          data.map(({ name, photo, rating, description, price, type }, key) => (
            <Card
              key={key}
              src={photo}
              name={name}
              description={description}
              rating={rating ? Math.floor(rating) : 0}
              type={type}
              price={price.toString() + "$"}
            />
          ))
        ) : (
          <div className="col-span-2 w-full items-center flex justify-center gap-2 pt-16">
            <span className="font-icons text-4xl animate-spin">refresh</span>
            <p className="font-semibold">Loading...</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Search;
