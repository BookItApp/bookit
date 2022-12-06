import Image from "next/image";
import Link from "next/link";
import BannerImage from "../public/images/banner.jpeg";

const Banner = () => (
  <div className="relative w-full">
    <div className="absolute w-full h-full flex flex-col items-center gap-8 justify-center bg-black/25 2xl:rounded-lg z-10">
      <p className="text-white text-5xl font-bold text-center">
        Reserve the destinations of<br/>your dreams in no time.
      </p>
      <Link href="/" className="bg-white rounded-full px-6 py-2 flex flex-row items-center gap-1">
        <p className="font-bold">Get started</p>
        <span className="font-icons text-2xl ml-1 -mr-1">arrow_forward</span>
      </Link>
    </div>
    <Image
      alt="Banner"
      src={BannerImage}
      placeholder="blur"
      className="block 2xl:rounded-lg brightness-75"
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
