import Link from "next/link";
import { FaInstagram, FaTwitter } from 'react-icons/fa';


function Header() {
  return (
    <header className="flex justify-between items-center px-28 py-6 bg-[#1F1F1F] text-white ">
      <div className="flex justify-start font-bold text-2xl px-2 py-2 text-white">
        <h2>Logo</h2>
      </div>
      <nav className="flex mr-10 font-thin hover:touch-pan-up tracking-wider ">
        <ul className="flex gap-10 font-sans text-xs">
          <li className="hover:underline decoration-white">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:underline decoration-white">
            <Link href="#">Projects</Link>
          </li>
          <li className="hover:underline decoration-white">
            <Link href="#">About</Link>
          </li>

          <li className="hover:underline decoration-white">
            <Link href="#">Contacts</Link>
          </li>
         
         <div>|</div>
      <div className="flex gap-x-10">
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ">
        <FaInstagram size={12} className="fill-black stroke-white stroke-[25px] " />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaTwitter size={12} className="fill-black stroke-white stroke-[25px]" />
      </Link>
      </div>
        
       
        </ul>
      </nav>
    </header>
  );
}
export default Header;
