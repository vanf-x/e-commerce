import React from "react";

const NavBar = () => {

const apretar = (e) =>{
  console.log(`Apretando ${e.target.outerText}`)
  // console.log(e.target.outerText)
  
}

  return (
    <nav className="flex justify-between border items-center">
      <div>
<h1 className="cursor-default font-black text-3xl">ECOMMERCE</h1>
      </div>
      <div>
          <ul className="flex justify-around">
              <li className="mx-3 hover:font-bold hover:cursor-pointer transition-all" onClick={apretar}>Sección1</li>
              <li className="mx-3 hover:font-bold hover:cursor-pointer transition-all" onClick={apretar}>Sección2</li>
              <li className="mx-3 hover:font-bold hover:cursor-pointer transition-all" onClick={apretar}>Sección3</li>
              <li className="mx-3 hover:font-bold hover:cursor-pointer transition-all" onClick={apretar}>Sección4</li>
          </ul>
      </div>
      <div>
        <ul className="flex justify-around">
          <li><button className="bg-transparent  text-blue-700 font-semibold hover:underline py-2 px-4  transition-colors  rounded" onClick={apretar}>Iniciar Sesión</button></li>
          <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded transition-colors" onClick={apretar}>Registrarse</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
