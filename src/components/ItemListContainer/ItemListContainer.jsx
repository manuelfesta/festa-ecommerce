import './ItemListContainer.css'

const ItemListContainer = ({greeting = 'Saludos'}) => {
  return (
    <div className="home">
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer