import { Link } from "react-router-dom";

export function CardGames(){

    return (
        <div>
            <div className="border-2 border-black w-1/2 m-auto h-56 grid grid-cols-3">
                <div className="border-2 border-red-500 grid place-content-center">
                    <Link to={"/tick_tack"}>
                        <button className="border-2 border-black p-2 rounded-md" >Ir al tick tack</button>
                    </Link>
                </div>
                <div className="border-2 border-red-500 grid place-content-center">
                    <Link to={"/pointer"}>
                        <button className="border-2 border-black p-2 rounded-md">Ir al puntero</button>
                    </Link>
                </div>
                <div className="border-2 border-red-500 grid place-content-center">
                    <Link to={"/testReact"}>
                        <button className="border-2 border-black p-2 rounded-md">Ir a la prueba tecnica</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}