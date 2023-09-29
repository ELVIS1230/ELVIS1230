import '../../App.css'
import { Square } from '../../components/Tic Tac Toe/Square'
import { useState } from 'react'
import { TURNS } from '../../constants'
import { checkWinnerFrom , checkedEndGame } from '../../logic/board'
import  {WinnerModal}   from '../../components/Tic Tac Toe/WinnerModal'
import { saveGameToStorage , resetGameStorage } from '../../logic/storage'
import confetti from 'canvas-confetti'


export function TickTack() {

  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }
  )
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  

  const updateBoard = (index) => {
    
    if(board[index] || winner ) return
    
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    saveGameToStorage({newBoard, newTurn})

    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner){
      confetti()
      setWinner(newWinner)

    } else if(checkedEndGame(newBoard)){
      setWinner(false)
    }

  }
  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
   
  }
  return (
    <main className='h-screen w-screen p-8'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame} className='border-2 border-black w-16 text-sm mb-5'>Empezar de nuevo</button>
      <section className=" max-w-[150px] m-auto grid grid-cols-3 place-content-around gap-1 mb-4">
        {
          board.map((square, index) => {
            return (
              <Square
                className=""
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* {board[index]} */}
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='m-auto  max-w-[150px] flex justify-between '>

        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

