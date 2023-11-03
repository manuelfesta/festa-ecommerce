import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import ItemDetail from "../ItemDetail/ItemDetail"




export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
        mFetch(Number(pid)) 
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
    }, [])

    return (
        <ItemDetail product={product} />
)
}





export default ItemDetailContainer