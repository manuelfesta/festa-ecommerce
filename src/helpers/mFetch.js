const products = [
    {id: 1, name: 'Remera Lightweight', categoria: 'remeras', price: 1000, stock: 8, description: 'Remera de entrenamiento para Hombre', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/587703-1000-1000?v=638168498516700000&width=1000&height=1000&aspect=true'},
    {id: 2, name: 'SuperRep Cycle 2', categoria: 'zapatillas', price: 2000, stock: 52, description: 'Zapatillas de entrenamiento para Hombre', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/156206-1000-1000?v=638086288550100000&width=1000&height=1000&aspect=true'},
    {id: 3, name: 'Free Metcon 4', categoria: 'zapatillas', price: 3000, stock: 15, description: 'Zapatillas de entrenamiento para Hombre', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/455743-1000-1000?v=638149330613000000&width=1000&height=1000&aspect=true'},
    {id: 4, name: 'Sportswear Club', categoria: 'buzos', price: 4000, stock: 51, description: 'Buzo con capucha para Hombre', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/290194-1000-1000?v=638115701811470000&width=1000&height=1000&aspect=true'},
    {id: 5, name: 'Producto 5', categoria: 'buzos', price: 5000, stock: 35, description: 'Buzo con capucha para Hombre', imageUrl: 'https://nikearprod.vtexassets.com/arquivos/ids/587695-1000-1000?v=638168493693970000&width=1000&height=1000&aspect=true'}
]
export const mFetch  = (pid) =>  new Promise((res,rej) => {     
        setTimeout(()=>{
            res(pid  ? products.find(product => product.id === pid) : products)
        }, 1000)

})