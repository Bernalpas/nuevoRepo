
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'



const Api = () =>{



    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => console.log(data))
    })


    const imprimir = () =>{
        console.log('Estamos usando eventos en React');
        alert('Estamos usando eventos en React');
    }




    return(
        <div className='container'>
            <div>
            <h1>Api Rick</h1>
                <h2>
                    Personajes de la Serie
                </h2>
            </div>
            <Button onClick={ imprimir }>Imprimir Datos en Consola</Button>
        </div>
    )
}

export default Api;