import { useCounter } from "../../hooks/useCounter"
import './ItemCounter.css'

// useNombre -> hook  
export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)    

    const handleOnAdd = ()=>{
        onAdd(count)
    }
    return (
        
        <div>
            <div className="counter">
                    <button className="btn">{count}</button>
                    <button className="btn" onClick={handleResta}> - </button>
                    <button className="btn" onClick={handleSuma}> + </button>
            </div>
            <div>
                <button className="btn2" onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}