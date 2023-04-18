import { useState } from 'react'

function App() {

   const tv = {
      producto: "Tv",
      precio: 1,
   }

   const cel = {
      producto: "Cel",
      precio: 2,
   }

   const productos = [tv,cel]

  

   const [seleccion, setSeleccion] = useState('')
   const [lista, setLista] = useState('')

  const handlechangeproducto = (event )=> {
    setSeleccion(event.target.value)
  }

  const Add =() => {
    
    const productosobj = {
      name: productos[seleccion].producto,
      price: productos[seleccion].precio
    }

    const copiaLista= [...lista]
    copiaLista.push(productosobj)
    setLista(copiaLista)

    console.log (lista)
  }

  const[printHtml, setPrintHtml] = useState('')

  const Print=() =>{
    let totalPrice= 0
    for (let index = 0; index < lista.length; index++) {
      totalPrice += lista[index].price
     
      
    }
   setPrintHtml(
    <>


{[...Array(lista.length)].map((x, index) => (
					<>
          <div className="flex gap-2">
          <p>Producto: {lista[index].name}</p>
          <p>Precio: {lista[index].price} </p>
        </div>
          </>
				))}

        <p>Total: {totalPrice}</p>
    </>
   )
  }
  ///Cambio para clase

  return (
    <>
      <div className="flex gap-3"> 
      <h1 className="font">Producto</h1>
      <select 
      onChange={(event)=> handlechangeproducto(event)}
  
      name='productos'>
        <option value=""></option>
      <option value={0}> {productos[0].producto}</option >  
      <option value={1}> {productos[1].producto}</option>
      </select>

      <button 
      onClick={(Add)}>Add</button>
      <button
      onClick={(Print)}>Print</button>
    </div>
    <div>{printHtml}</div>
    </>
  )
}

export default App
