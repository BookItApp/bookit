import Link from "next/link";

const Header = () => (
  <header className="p-4 w-full">
    <div className="container mx-auto flex flex-row justify-between items-center">
      <Link href="/" className="font-bold text-3xl select-none">
        Book
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-600">
          It.
        </span>
      </Link>
      <div className="font-semibold flex flex-row gap-4">
        <Link
          href="/signin"
          className="py-1 px-4 rounded-full hover:bg-cyan-100 hover:text-cyan-600 transition"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="bg-cyan-600 py-1 px-4 rounded-full text-white transition hover:bg-cyan-700"
        >
          Get started
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
