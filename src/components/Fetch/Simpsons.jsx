import { useState, useEffect } from 'react'

const Simpsons = () => {
    const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
        /*
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
            .then(respuesta => respuesta.json())
            .then(data => setPersonaje(data))
            .catch(error => console.error(error))
        */

        //Si quiero trabajar con async y await en lugar de then y catch. 
        //Tengo que realizar lo siguiente: 

        //Puedo usar try y catch que me permite manejar error. Si algo dentro del try falla el código continua con el catch.

        const pedirPersonajes = async () => {
            try {
                const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10");
                const data = await respuesta.json();
                setPersonaje(data);
            } catch (error) {
                console.error(error);
            }
        }
        pedirPersonajes();

    }, [])
    return (
        <div>
            <h2>Los Simpsons</h2>
            {
                personaje.map((personaje, index) => {
                    return (
                        <div key={index}>
                            <p>Nombre: {personaje.character} </p>
                            <img src={personaje.image} alt={personaje.character} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Simpsons