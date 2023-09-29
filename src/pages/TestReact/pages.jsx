import { useCatFact } from "../../hooks/useCatFact"
import { useCatImage } from "../../hooks/useCatImage"


export function TestReact() {
    const { fact, refreshFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main className="flex flex-col justify-center items-center border-2 border-black w-screen">
            <h1>Esta es la prueba </h1>
            <button className="border-2 border-black rounded-md " onClick={handleClick}>Trae un nuevo fact</button>
            {fact && <h1>{fact}</h1>}
            {imageUrl && <img className="h-auto w-52" src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}