import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BannerImage from "../public/images/banner.jpeg";
import HotelImage from "../public/images/hotel.jpeg";
import ApartmentImage from "../public/images/apartment.jpeg";
import ResortImage from "../public/images/resort.jpeg";
import VillaImage from "../public/images/villa.jpeg";

import Destinations from "../components/Destinations";
import ChristmasImage from "../public/images/christmas.jpeg";
import NewYorkImage from "../public/images/nyc.jpeg";

const Banner = () => (
  <div className="relative w-full h-96">
    <Image
      alt="Banner"
      src={BannerImage}
      placeholder="blur"
      fill
      className="sm:rounded-lg brightness-75 z-0 object-cover"
    />
    <div className="absolute w-full h-full flex flex-col items-center gap-4 justify-center bg-black/25 sm:rounded-lg z-20 p-4">
      <p className="text-white text-5xl font-bold text-center">
        Reserve the destinations of
        <br />
        your dreams in no time.
      </p>
      <Link
        href="/search"
        className="bg-white rounded-full px-6 py-2 flex flex-row items-center gap-1"
      >
        <p className="font-bold">Get started</p>
        <span className="font-icons text-2xl ml-1 -mr-1">arrow_forward</span>
      </Link>
    </div>
  </div>
);

const LongCard = ({
  href,
  name,
  image,
}: {
  href: string;
  name: string;
  image: StaticImageData;
}) => (
  <Link href={href} className="group relative h-full w-full">
    <div className="absolute z-10 p-4 bottom-0">
      <h3 className="text-white text-4xl">{name}</h3>
    </div>
    <Image
      alt={name}
      src={image}
      placeholder="blur"
      className="block rounded-md brightness-75 group-hover:brightness-100 transition object-cover h-full"
    />
  </Link>
);

const Accomodations = () => (
  <div className="w-full flex flex-col gap-4">
    <div className="flex flex-row items-center justify-between gap-8">
      <h2 className="text-xl font-bold">Our accomodations</h2>
      <Link
        href="/accomodations"
        className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center flex-row"
      >
        <p className="font-bold">See all of them</p>
        <span className="font-icons text-xl ml-1 -mr-1">arrow_forward</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <LongCard href="/" name="Hotels" image={HotelImage} />
      <LongCard href="/" name="Apartments" image={ApartmentImage} />
      <LongCard href="/" name="Resorts" image={ResortImage} />
      <LongCard href="/" name="Villas" image={VillaImage} />
    </div>
  </div>
);

const Articles = () => (
  <div className="w-full flex flex-col gap-4">
    <div className="flex flex-row items-center justify-between gap-8">
      <h2 className="text-xl font-bold">
        Get inspiration for your next adventure!
      </h2>
      <Link
        href="/accomodations"
        className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center flex-row"
      >
        <p className="font-bold">Explore all ideas</p>
        <span className="font-icons text-xl ml-1 -mr-1">arrow_forward</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <LongCard
        href="/"
        name="The coziest holiday stays in the USA"
        image={ChristmasImage}
      />
      <LongCard href="/" name="48 hours in New York" image={NewYorkImage} />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center container gap-8">
      <Banner />
      <div className="p-4 sm:p-0 sm:pb-8 flex flex-col gap-8 items-center">
        <Destinations />
        <Accomodations />
        <Articles />
      </div>
    </main>
  );
}
