import Image from "next/image";
import BannerImage from "../public/images/banner.jpeg";

const Banner = () => (
  <div className="relative w-full">
    <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black/25 2xl:rounded-lg">
      <p className="text-white text-5xl font-bold">
        Reserve the destinations of your dreams in no time.
      </p>
    </div>
    <Image
      alt="Banner"
      src={BannerImage}
      placeholder="blur"
      className="block 2xl:rounded-lg"
    />
  </div>
);

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center container">
      <Banner />
    </main>
  );
}
