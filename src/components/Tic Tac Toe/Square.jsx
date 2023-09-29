export const Square = ({ children, isSelected, updateBoard, index })=>{
    const className = `w-12 h-12 border-2 grid place-content-center border-black  text-2xl   rounded-[4px]
                         ${isSelected ? 'bg-black text-white ' : ''}`


    const handleClick = () =>{
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}  
        </div>
    )

}