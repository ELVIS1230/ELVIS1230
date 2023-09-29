import { Square } from "./Square";

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null; 
    const winnerText = winner === false ? "Empate" : "El ganador es: "
    return(
              <section className='border-2 border-sky-500 fixed  left-0 top-0 h-screen w-screen inset-0 flex justify-center items-center bg-gray-700 bg-opacity-75 modal-bg-container'>
                <div className="bg-white h-40 w-52 rounded-2xl p-3 flex flex-col justify-around items-center">
              <h1 className='text-2xl'>{winnerText}</h1>          
              {
              winner && <Square> {winner}</Square>
                }
            
              <button onClick={resetGame} className='border-2 border-black px-2 py-1 rounded-xl w-40 hover:bg-black hover:text-white'>Empezar de nuevo</button>
  
                </div>
  
              </section> 
    )
}