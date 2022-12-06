import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BannerImage from "../public/images/banner.jpeg";
import HotelImage from "../public/images/hotel.jpeg";
import ApartmentImage from "../public/images/apartment.jpeg";
import ResortImage from "../public/images/resort.jpeg";
import VillaImage from "../public/images/villa.jpeg";
import Destinations from "../components/Destinations";

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
        href="/"
        className="bg-white rounded-full px-6 py-2 flex flex-row items-center gap-1"
      >
        <p className="font-bold">Get started</p>
        <span className="font-icons text-2xl ml-1 -mr-1">arrow_forward</span>
      </Link>
    </div>
  </div>
);

const Accomodation = ({
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
      alt="Hotels"
      src={image}
      placeholder="blur"
      className="block rounded-md brightness-75 group-hover:brightness-100 transition"
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
      <Accomodation href="/" name="Hotels" image={HotelImage} />
      <Accomodation href="/" name="Apartments" image={ApartmentImage} />
      <Accomodation href="/" name="Resorts" image={ResortImage} />
      <Accomodation href="/" name="Villas" image={VillaImage} />
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center container gap-8">
      <Banner />
      <Destinations/>
      <div className="p-4 sm:p-0 flex flex-col gap-4 items-center">
        <Accomodations />
      </div>
    </main>
  );
}
