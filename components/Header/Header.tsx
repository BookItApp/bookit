import Link from "next/link";
import { cookies } from "next/headers"

const Header = async () => {
  const loggedIn = cookies().has("next-auth.session-token")
  return (
    <header className="w-full p-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/" className="font-extrabold text-3xl select-none">
          Book
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-600">
            It.
          </span>
        </Link>
        <span className="visible sm:hidden font-icons text-4xl">menu</span>
        <div className="hidden sm:flex font-semibold flex-row gap-4">
          {!loggedIn ?
            <>
              <Link
                href="/signin"
                className="py-1 px-4 rounded-full hover:bg-gradient-to-br from-emerald-400/20 to-blue-600/20 transition"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-br from-emerald-400 to-blue-600 py-1 px-4 rounded-full text-white transition hover:shadow-md"
              >
                Sign Up
              </Link>
            </>
            :
            <div className="flex flex-row items-center gap-2"><span className="font-icons text-3xl">person</span><p>Signed in</p></div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
