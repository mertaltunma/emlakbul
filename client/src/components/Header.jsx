import logo from "../assets/emlakbul_logo.png";
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-700 shadow-lg">
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3 gap-2'>
        <Link to="/"><img src={logo} alt="logo" className="rounded-xl w-22 sm:w-32 hover:opacity-70"/></Link>
        <form className='bg-slate-300 p-2 rounded-xl flex items-center'>
          <input type="text" placeholder="Emlak ara" className='bg-transparent focus:outline-none w-32 sm:w-64'/>
          <FaSearch/>
        </form>
        <ul className="flex gap-3">
          <Link to="/about"><li className="hidden sm:inline text-slate-400 hover:underline">Hakkında</li></Link>
          <Link to="/sign-in"><li className="text-slate-400 hover:underline">Giriş Yap</li></Link>
          <Link to="/sign-up"><li className="text-slate-400 hover:underline">Hesap Aç</li></Link>
        </ul>
      </div>
    </header>
  )
}
