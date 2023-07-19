
import products from '../data'
import '../css/productos.css'

const Productos = () => {
    return (
        <div className='container'>
            <div>
                <h1>Productos para la Venta</h1>
                {products.map((products)=>{

                    /* console.log(products) */
                    
                    console.log(products.name);
                    console.log(products.image);
                    console.log(products.id);
                    
                    return(
                        <>
                            <h2>{products.name}</h2>
                            <img src={products.image} alt='Producto 1' />
                            <p>{products.precio}</p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;