"use client";

import NYC from "../../public/images/nyc.jpeg";
import Image from "next/image";

const Search = () => {
  return (
    <main className="h-full w-full flex flex-col items-start container gap-4 p-4 sm:p-0 sm:pt-4">
      <div className="flex flex-row gap-x-8 gap-y-2 items-center justify-between w-full flex-wrap">
        <h2 className="text-3xl font-bold">What are you looking for?</h2>
        <div className="flex flex-row gap-2 items-center">
          <input
            type={"text"}
            placeholder="Destination"
            className="rounded-md text-sm focus:ring-sky-400 focus:border-sky-400"
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
      <div className="rounded-md shadow-md w-full flex flex-row flex-wrap sm:flex-nowrap">
        <div className="relative min-h-48 w-full sm:w-72">
          <Image
            src={NYC}
            alt="Warwick NY"
            fill
            className="rounded-t-md sm:rounded-tr-none sm:rounded-l-md"
          />
        </div>
        <div className="w-full flex flex-col items-start sm:items-end justify-between p-4 gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-row items-center gap-4">
                <div className="flex flex-row -mx-1 -mt-1">
                  <span className="font-icons text-2xl text-amber-500">
                    star
                  </span>
                  <span className="font-icons text-2xl text-amber-500">
                    star
                  </span>
                  <span className="font-icons text-2xl text-amber-500">
                    star
                  </span>
                  <span className="font-icons text-2xl text-amber-500">
                    star
                  </span>
                  <span className="font-icons text-2xl text-amber-500">
                    star
                  </span>
                </div>
                <p className="text-xs bg-green-400 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                  Hotel
                </p>
              </div>
              <p className="text-lg text-green-500">200$</p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                Hilton Garden Inn New York-Midtown Park Ave
              </p>
              <p className="text-sm">A hotel in New York.</p>
            </div>
          </div>
          <button className="flex flex-row gap-2 w-full sm:w-36 items-center justify-center px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-md text-white mt-2">
            <p>View deal</p>
            <span className="font-icons -mx-0.5">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Search;
