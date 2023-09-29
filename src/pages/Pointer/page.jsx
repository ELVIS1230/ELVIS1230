import { useEffect, useState } from "react"


export function Pointer(){
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        // console.log('efecto', {enabled})


        const handleMove = (event) =>{
            const { clientX, clientY} = event
            console.log('handleMove', {clientX, clientY})
            setPosition({x: clientX, y: clientY})
        }
        if(enabled){
            window.addEventListener('pointermove' , handleMove)
        }

        return ()=>{
            window.removeEventListener('pointermove' , handleMove)
        }
    }, [enabled])

    return(
        <main>
            <div className="bg-red-500 rounded-full absolute w-10 h-10 pointer-events-none top-[-20px] left-[-20px] opacity-80" 
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
            <h1>Este es el puntero</h1>

            <button onClick={()=> setEnabled(!enabled)} className="border-2 border-black p-2 rounded-md">{enabled ? 'Desactivar' : 'Activar'} el puntero</button>
        </main>
    )
}