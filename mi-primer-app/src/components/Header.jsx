import React from "react";

const Header = ({titulo}) => {
  return(
    <header className="bg-pink-300 shadow-md fixed left-0 w-full p-4">
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className="text-black">{titulo}</h1>
            <nav>
                <ul className='flex gap-4 text-black'>
                    <li className='hover:text-amber-50 cursor-pointer'>Inicio</li>
                    <li className='hover:text-amber-50 cursor-pointer'>Proyecto</li>
                </ul>
            </nav>
        </div>

    </header>
  );
};

export default Header