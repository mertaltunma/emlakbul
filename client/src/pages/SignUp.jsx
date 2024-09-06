import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div className='p-3 max-w-xl mx-auto'>
      <h1 className="text-3xl text-center font-semibold my-7">Hesap Aç</h1>
      <form className='flex flex-col gap-3'>
        <input type="text" placeholder="Kullanıcı Adı" className='border p-3 rounded-xl' id="username"/>
        <input type="text" placeholder="E-posta adresi" className='border p-3 rounded-xl' id="username"/>
        <input type="text" placeholder="Şifre" className='border p-3 rounded-xl' id="username"/>
        <button className='bg-slate-700 text-white p-3 rounded-xl uppercase hover:opacity-90'>Hesap Aç</button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Zaten hesabın var mı?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-800 hover:opacity-70">Giriş Yap</span>
        </Link>
      </div>
    </div>
  )
}
