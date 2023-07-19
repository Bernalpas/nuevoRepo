
import { Component } from 'react'


class Main extends Component {
   

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre Producto</label>
                            <input type="text" className="form-control" id="nombreProducto" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio Producto</label>
                            <input type="number" className="form-control" id="precioProducto" required />
                        </div>
                        <div className="text-center m-5">
                            <button type="button" className="btn btn-primary w-75">
                                Cargar Datos
                            </button>
                        </div>
                        <div className="text-center m-5">
                            <button type="reset" className="btn btn-warning w-75">
                                Borrar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

export default Main;