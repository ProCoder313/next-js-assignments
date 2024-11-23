import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-around bg-blue-700 text-white px-2 py-4">
      <div>
        <Image src="/abc.png" alt="logo" height={10} width={50} />
      </div>
      <nav className="flex gap-x-12">
        <ul className="flex gap-x-12 items-center font-semibold  hover:underline">
          <li className="hover:bg-blue-400">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:bg-blue-400">
            <Link href="./about/">About</Link>
          </li>

          <li className="hover:bg-blue-400">
            <Link href="./contact-us/">Contact</Link>
          </li>
        </ul>
        <div className="flex">
          <input
            placeholder="Search Here"
            className=" text-black text-center placeholder-gray-950 hover:border-solid"
          />
          <Image
            src="/magni222.png"
            alt="magnifyre image"
            width={30}
            height={20}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
