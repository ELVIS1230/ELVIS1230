import { CardGames } from "../components/CardGame";
export function Home(){

    return(
        <div className="bg-sky-200 h-screen w-screen">
            <h1 className="text-3xl font-semibold">Este es el inicio</h1>
            <CardGames />
        </div>
    )
}