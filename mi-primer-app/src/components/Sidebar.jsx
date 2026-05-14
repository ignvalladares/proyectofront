import { useState } from "react";

const Sidebar = () =>{
    const [contador, setContador] = useState(0)

    function aumentarContador(){
        setContador((numeroActual) => numeroActual + 1)
    }

    function disminuirContador(){
        setContador((numeroActual) => (numeroActual > 0 ? numeroActual - 1 : 0));

    }

    function reinicioContador(){
        setContador(0)
    }


    return(
        <aside>
            <h2>Sidebar</h2>
            <p>Este Sidebar registra la cantidad de clicks</p>

            <div>
                <p> Cantidad de clicks</p>
                <p>{contador}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg" 
                    onClick={(aumentarContador)}> Aumentar 
                </button>

                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg " 
                    onClick={(disminuirContador)}> Disminuir 
                </button>

                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg " 
                    onClick={(reinicioContador)}> Reiniciar 
                </button>
            </div>

        </aside>
    );
    
};

// si el contador es 0 y quiero bajar el contador, no debe tener numeros negativos, osea que el contador aunque baje de 0 siempre debe ser 0


export default Sidebar
